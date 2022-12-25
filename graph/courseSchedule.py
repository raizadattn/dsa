
# https://leetcode.com/problems/course-schedule/submissions/
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        
        graph = { i:[] for i in range(numCourses) }
        visited = set()
        
        for x,y in prerequisites:
            graph[x].append(y)
        
        # print('g', graph)
        
        def dfs(course):
            if course in visited:
                return False
            if graph[course] == []:
                return True
            
            visited.add(course)
            # print('graph[course]',graph[course])
            for i in graph[course]:
                if not dfs(i):
                    return False
            visited.remove(course)
            graph[course] = []
            return True
            
            
        for i in range( numCourses ):
            if not dfs(i):
                return False
            
        return True