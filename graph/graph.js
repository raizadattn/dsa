class graph{
    constructor(v){
        this.verticesCount = v
        this.graph = new Array(v).fill().map(e=> new Array() );
        
    }
    addEdge(u,v){
        this.graph[u].push(v)
        this.graph[v].push(u)
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

g1.addEdge(2,1)
g1.addEdge(2,5)
g1.addEdge(2,4)
g1.addEdge(1,3)
g1.addEdge(3,4)
g1.addEdge(4,5)

console.log(g1.graph)

