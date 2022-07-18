class Queue {

    constructor(n) {
        this.array = []
        this.capacity = n
        this.front = 0
        this.rear = 0
    }

    size() {
        console.log('size is ', this.rear - this.front,this.rear , this.front)
        return this.rear - this.front 
    }

    isEmpty() {
        
        return this.size() === 0
    }
    enqueue(data) {
        if (this.capacity === this.size()) {
            return 'q is full'
        }
        this.array[this.rear] = data
        this.rear++

    }
    dequeue() {
        if (this.isEmpty()) {
            return 'q is empty'
        }
        this.array[this.front] = -1
        this.front++
    }
    frontElem() {
        console.log('ins front')
        if (this.isEmpty()) {
            return 'q is empty'
        } else {
            console.log('front is ', this.array[this.front])
            return this.array[this.front]
        }
    }
    rearElem() {
        if (this.isEmpty()) {
            return 'q is empty'
        } else {
            console.log('rear is ',  this.array[this.rear-1])

            return this.array[this.rear-1]
        }
    }
    print() {
        console.log('printing q - ', this.array)
        // for( item of this.array){
        //     console.log('item -> ', item)
        // }
    }
}
let q = new Queue(5)
q.enqueue(4)
q.enqueue(2)
q.enqueue(6)
q.enqueue(9)
q.enqueue(3)
q.print()
q.frontElem()
q.rearElem()
q.size()
q.dequeue()
q.dequeue()
q.frontElem()
q.rearElem()
q.print()
q.dequeue()
q.dequeue()
q.print()
q.size()
q.dequeue()
q.print()
q.size()
console.log(q.dequeue())
