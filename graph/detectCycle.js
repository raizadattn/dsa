class graph {
    constructor(v) {
        this.verticesCount = v
        this.graph = {}
        this.visited = {}
        this.dfsResult = []
    }
    addEdge(u, v) {
        if (!this.graph[u]) {
            this.graph[u] = []
        }
        // console.log()
        this.graph[u].push(v)
        // this.graph[v].push(u)
    }

    dfs(s) {
        if (s) {
            this.dfsUtil(s)
        } else {
            for (let [node, adjList] of Object.entries(g1.graph)) {
                if (!this.visited[node]) {
                    this.dfsUtil(node)
                }
            }
        }

    }

    detectCycleBfs() {
        let isVisited = new Array(this.verticesCount).fill(false)
        let isParent = new Array(this.verticesCount).fill(-1)

        // this loop for disconnected graph
        for (let node of Object.keys(this.graph)) {
            if (!isVisited[node]) {
                // let isVisited = new Array(this.verticesCount).fill(false)
                // let isParent = new Array(this.verticesCount).fill(-1)
                let q = []
                q.push(node)
                
                while (q.length > 0) {
                    let front = q.shift()
                    isVisited[front] = true
                    isParent[front] = -1
                    for (node of (this.graph[front] || [])) {
                        console.log('bfs cyc',front,node)
                        if (!isVisited[node]) {
                            isVisited[node] = true
                            isParent[node] = front
                            q.push(node)
                        } else if (isVisited[node] && isParent[node] !== front) {
                            console.log('bfs cycle at ',front, isVisited[front],isParent[front] , node )
                            return true
                        }

                    }

                }
                // return false
            }

        }
        return false

    }
    detectCycle(node, isVisited, prev) {
        console.log('node, isVisited, prev', node, isVisited, prev)
        isVisited[node] = true
        if (!this.graph[node]) {
            console.log('nothing left')
            return false
        }
        // for( let [adjNode, adjList] of Object.entries(this.graph[node]) ){
        for (let adjNode of (this.graph[node] || [])) {
            // both conditions work
            console.log('adjNode', adjNode, 'this.graph[node]', this.graph[node])
            if (!isVisited[adjNode]) {
                let cycleDetected = this.detectCycle(adjNode, isVisited, node)
                if (cycleDetected) {
                    return cycleDetected
                }
            } else if (isVisited[adjNode] && adjNode !== prev) {
                console.log('isVisited[adjNode] && adjNode !== prev', isVisited[adjNode], adjNode, prev)
                return true
            }
        }
        return false
    }
    isCycle() {
        console.log('this.graph', this.graph)
        let isVisited = {}
        let res = false
        for (let [node, adjList] of Object.entries(this.graph)) {
            if (!isVisited[node]) {
                // res =  this.detectCycle( node , isVisited , -1)
                res = this.detectCycle(node, isVisited, -1)
                if (res) {
                    return res
                }
            }
        }
        return res

    }

    dfsUtil(s) {
        console.log('dfs for ', s)
        this.dfsResult.push(s)
        this.visited[s] = true
        // lets say we have a node 3, which have no adj nodes directed to, so 3 will have no entry in map, so we first mark it visited 
        // and then push into result and then return because it has no adj nodes.
        if (!this.graph[s]) {
            return
        }
        console.log('adj', this.graph[s])
        for (let node of this.graph[s]) {
            console.log('dfs for ', s, ' node ', node)

            if (!this.visited[node]) {
                this.dfs(node)
            }
        }
    }

}
class node {
    constructor() {
        list = []
    }
}

let vertices = 6
let g1 = new graph(vertices)
console.log(g1.graph)

g1.addEdge(0, 1);
g1.addEdge(0, 9);
g1.addEdge(1, 2);
g1.addEdge(2, 0);
g1.addEdge(2, 3);
g1.addEdge(9, 3);
console.log('g1.graph', g1.graph)
console.log('cycle g1', g1.isCycle())

let g2 = new graph(3)

g2.addEdge(0, 1);
g2.addEdge(1, 2);
console.log('cycle', g2.isCycle())


console.log('bfs cycle g1', g1.detectCycleBfs())
console.log('bfs cycle g2', g2.detectCycleBfs())

console.log(g1.graph)
console.log(g2.graph)

console.log('result', g1.dfsResult)
