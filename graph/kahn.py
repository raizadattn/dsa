# course schedule 2
# https://leetcode.com/problems/course-schedule-ii/submissions/860065407/

class Solution:
    # KAHN's algo
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        
        graph = { i:[] for i in range(numCourses) }
        visited = set()
        result = []
        for x,y in prerequisites:
            graph[y].append(x)

        indegree = [0]*numCourses
        for node in graph:
            for neighbour in graph[node]:
                indegree[neighbour] += 1
        print(indegree)

        queue = deque()
        for node in range(numCourses):
            if indegree[node] == 0:
                queue.append(node)
        
        while queue:
            # print('q', queue)
            node = queue.popleft()
            # if node in visited:
            #     continue
            result.append(node)
            visited.add(node)
            # print('vis', visited)
            # print('ind', indegree)
            for neighbour in graph[node]:
                indegree[neighbour] -= 1
                if indegree[neighbour] == 0:
                    queue.append(neighbour)
            # print('new ind', indegree)
            # for node in range(numCourses):
            #     # if indegree[node] == 0 and node not in visited:
            #     if indegree[node] == 0:
            #         queue.append(node)
            

            # print('result', result)
        if len(result) != numCourses:
            return []
        return result