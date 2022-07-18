class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count += 1
        return this.count - 1
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // Check top element in stack
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    // Check if stack is empty
    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0
    }

    // Check size of stack
    size() {
        console.log(`${this.count} elements in stack`)
        return this.count
    }

    // Print elements in stack
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

    // Clear stack
    clear() {
        this.items = []
        this.count = 0
        console.log('Stack cleared..')
        return this.items
    }
}

let st = new Stack()
st.push(3)
st.push(4)
st.push(9)
st.push(1)
st.push(11)


function reveresStack(stack){
    if(stack.size() === 0){
        return
    }
    let poppedItem = stack.pop()
    reveresStack(stack)
    insertAtBottom(stack, poppedItem)
}

function insertAtBottom(stack,item){
    if(stack.size() === 0){
        stack.push(item)
        return
    }
    
    let poppedItem = stack.pop()
    insertAtBottom(stack,item)
    stack.push(poppedItem)   
}


reveresStack(st)
st.print()