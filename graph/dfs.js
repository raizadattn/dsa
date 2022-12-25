class graph{
    constructor(v){
        this.verticesCount = v
        this.graph = {}
        this.visited = {}
        this.dfsResult = []
    }
    addEdge(u,v){
        if( !this.graph[u] ){
            this.graph[u] = []
        }
        // console.log()
        this.graph[u].push(v)
        // this.graph[v].push(u)
    }

    dfs(s){
        if(s){
            this.dfsUtil(s) 
        }else{
            for( let [node, adjList] of Object.entries(g1.graph) ){
                if(!this.visited[node]){
                    this.dfsUtil(node) 
                }
            }
        }
        
    }

    dfsUtil(s){
        console.log('dfs for ',s )
        this.dfsResult.push(s)
        this.visited[s] = true
        // lets say we have a node 3, which have no adj nodes directed to, so 3 will have no entry in map, so we first mark it visited 
        // and then push into result and then return because it has no adj nodes.
        if( !this.graph[s] ){
            return
        }
        console.log('adj',this.graph[s])
        for( let node of this.graph[s]){
            console.log('dfs for ',s,' node ',node )

            if( !this.visited[node] ){
                this.dfs( node )
            }
        }
    }

}
class node{
    constructor(){
        list = []
    }
}

let vertices = 6
let g1 = new graph(vertices)
console.log(g1.graph)

// g1.addEdge(0, 1);
// g1.addEdge(0, 2);
// g1.addEdge(1, 2);
// g1.addEdge(2, 0);
// g1.addEdge(2, 3);
// g1.addEdge(3, 3);
// console.log('g1.graph',g1.graph)
// g1.dfs(2)


g1.addEdge(0, 1);
g1.addEdge(0, 9);
g1.addEdge(1, 2);
g1.addEdge(2, 0);
g1.addEdge(2, 3);
g1.addEdge(9, 3);
console.log('g1.graph',g1.graph)
g1.dfs()

console.log(g1.graph)

console.log('result', g1.dfsResult)