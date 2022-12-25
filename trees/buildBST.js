let arr = [30, 60, 10, 40, 70]

class Node {
    constructor(data) {
        this.val = data
        this.left;
        this.right;
    }
}
function buildBST(root, data) {

    if (!root) {
        // console.log('creating', data)
        let node = new Node(data)
        return node
    } else {
        if (data < root.val) {
            root.left = buildBST(root.left, data)
        } else {
            root.right = buildBST(root.right, data)
        }
        return root
    }
}
let root = new Node(50)
// let root;
for (let item of arr) {
     buildBST(root, item)
    // console.log('root', root)
}

console.log(root, 'left' ,root.left)
let result = []
function lot(root) {
    let q = []

    q.push(root)
    q.push(null)
    let level = ''
    while (q.length) {
        
        let front = q.shift()
        if (front === null) {
            console.log(' ENCOUNTERED NULL ***********************')
            q.push(null)
            let qSize = q.length
            let str = ''
            // console.log('q ',q,'qSize ',qSize)
            // for(let i = 0; i<qSize; i++ ){
            //     str = str + q[i].val + ' '
            // }
            console.log('level --->>>>>>>>>>> ',level)
            level = ''
            q.shift()

        } else {
            let qitems = ''
            for( let item of q){
                if(item){
                    qitems = qitems + item.val + ' '
                }
            }
            console.log('q ',qitems)
            qitems = ''
            console.log('old level', level)
            level = level + front.val + ' '
            console.log('levle',level)
            console.log('front',front.val)
            if (front.left) {
                q.push(front.left)
                console.log('pushleft')
            }
            if (front.right) {
                q.push(front.right)
                console.log('pushright')

            }
            for( let item of q){
                if(item){
                    qitems = qitems + item.val + ' '
                }
            }
            console.log('q ',qitems)
            qitems = ''

        }
        
    }
}

lot(root)