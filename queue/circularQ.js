class CircularQueue{

    constructor(n){
        this.array = []
        this.capacity = n
        this.size = 0
        this.front = -1
        this.rear = -1
    }


    enqueue(data){
        //overflow
        if((this.front === 0 && this.rear === (this.capacity - 1) )  || this.rear === (this.front - 1)%size ){
            return 'overflow -> q is full'
        }
        if(front===-1 && rear===-1){
            this.front++
            this.rear++
            this.array[this.front] = data
        }
        if(this.front !== 0 && this.rear === this.capacity - 1 ){
            this.rear = 0
            this.array[this.rear] = data
        }
    }

    dequeue(){
        //underflow
        if(this.front ===-1 && this.rear===-1){
            return 'undeflow -> q is empty'
        }
        if(this.front === -1){
            return
        }
        this.array[this.front] = -1
        this.front++
    }

    frontElem(){
        if(this.front !== -1){
            return this.front
        }else{
            return 'Q is empty'
        }
    }
    rearElem(){
        if(this.rear !== -1){
            return this.rear
        }else{
            return 'Q is empty'
        }
    }
}



let cq = new CircularQueue(5)


// let arr = ['h','e','l','l','O00']

// for(let i=0; i<15; i++){
//     console.log(i ,' at i%5 ',i%5,'  is --- ', arr[i%5])
// }