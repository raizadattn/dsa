class Graph {
    constructor(n){
        this.adjList = new Array(n).fill().map(e=> new Array() );
        // or this.adjList = {}
        this.indegrees = {}
        for(let i=0;i<n;i++){
            this.indegrees[i] = 0
        }
    }

    addEdge(u,v){
        this.adjList[u].push(v)
    }

    getIndegrees(){
        
        for( let vertice of this.adjList ){
            // console.log('ver',vertice)
            for( let adjNode of vertice){
                    this.indegrees[adjNode] += 1
            }

        }
    }

    topologicalSort(){
        this.getIndegrees()
        console.log(' this.indegrees ', this.indegrees )
        let q = []
        
        for( let [key,value] of Object.entries(this.indegrees) ){
            if( value === 0){
                q.push(+key)
            }
        }
        while(q.length>0){
            let front = q.shift()
            console.log(front)
            for(let vertice of this.adjList[+front] ){
                this.indegrees[vertice] = this.indegrees[vertice] - 1
                if( this.indegrees[vertice] === 0){
                    q.push(+vertice)
                }
            }
            console.log('indegress',this.indegrees)

        }
        
    }

}

let g = new Graph (6);
g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);
console.log('adjList', g.adjList)
console.log('indegrees', g.indegrees)
g.topologicalSort()