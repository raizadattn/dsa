class graph{
    constructor(v){
        this.verticesCount = v
        this.graph = new Array(v).fill().map(e=> new Array() );
        this.visited = new Array(v).fill(false)
        this.bfsResult = []
    }
    addEdge(u,v){
        console.log('adding edge',u,v, this.graph)
        this.graph[u].push(v)
        // this.graph[v].push(u)
    }

    bfs(s){
        let q = []
        q.push(s)
        // let size = q.length
        while(q.length>0){
            console.log('Q+++++++++++++',q)
            let front = q.shift()
            this.bfsResult.push(front)
            console.log('--------F R O N T-----',front, 'and its adj ',this.graph[front])
            // console.log('front',front,q.length,this.visited[front])
            this.visited[front] = true
            for(let i=0; i< this.graph[front].length ; i++){
                if( !this.visited[this.graph[front][i]]){
                    console.log('not visited',this.visited)
            console.log('added',this.graph[front][i],q.length,this.visited[front])

                    q.push(this.graph[front][i] )
                }else{
                    console.log('already visited', this.graph[front][i])
                }
            }
            // size = q.length
        }
    }

}
class node{
    constructor(){
        list = []
    }
}

let vertices = 4
let g1 = new graph(vertices)
console.log(g1.graph)


g1.addEdge(0, 1);
g1.addEdge(0, 2);
g1.addEdge(1, 2);
g1.addEdge(2, 0);
g1.addEdge(2, 3);
g1.addEdge(3, 3);

//start from node 2
g1.bfs(2)
console.log('bfsResult',g1.bfsResult)

console.log(g1.graph)

