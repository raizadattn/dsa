// 0-indexed it is
class heap {
    constructor() {
        this.list = [];
        this.size = 0
        // [ x , 1, 2, 4 ]  1-indexed
    }

    insert(num) {
        // insert in the end of array
        // and then heapify from end till root

        // const size = this.list.length ; for 0-indexed
        this.size = this.size + 1;
        let index = this.size - 1
        this.list.push(num);
        // this.list[index] = num;
        console.log('inserted in arr',this.list)
        // if (tihs.size === 0) {
            
        // } else {
        //     this.list.push(num);

        //     // for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
        //     //     this.maxHeapify(this.list, this.list.length, i);
        //     // }
        // }
        //heapify bottom up approach
        while( index > 0 ){
            // let parent = parseInt( index / 2 ) for 1-indexed
            let parent = parseInt( (index-1) / 2 ) // for 0-indexed
            console.log('object',this.list, parent, index, this.list[parent] , this.list[index])
            if( this.list[parent] < this.list[index] ){
                console.log('yes')
                this.swap( this.list, parent, index )
                index = parent
            }else{
                return
            }
        }

    }

    delete(){
        // only root is always deleted

        // swap with the last element in the array
        // delete last element in the array
        // heapify the root
        let index = this.list.length - 1
        
        this.list[0] = this.list[index]
        this.size--
        this.list.pop()
        this.maxHeapify(this.list, this.list.length, 0)
    }

    maxHeapify(arr, n, i) {
        //maxheapify ith element in the array of size n
        let largest = i;
        // let left = 2 * i + 1; //left child index
        // let right = 2 * i + 2; //right child index
        let left = 2 * i; //left child index
        let right = 2 * i + 1; //right child index
        //If left child is smaller than root
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        // If right child is smaller than smallest so far 
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        // If smallest is not root, means smallest has changed, so swap
        if (largest != i) {
            let temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;

            // Recursively heapify the affected sub-tree 
            this.maxHeapify(arr, n, largest);
        }
    }
    minHeapify(arr, n, i){
        //minheapify ith element in the array of size n
        let smallest = i;
        let left = 2 * i; //left child index
        let right = 2 * i + 1; //right child index
        //If left child is smaller than root
        if (left < n && arr[left] < arr[smallest]) {
            smallest = left;
        }

        // If right child is smaller than smallest so far 
        if (right < n && arr[right] < arr[smallest]) {
            smallest = right;
        }

        // If smallest is not root, means smallest has changed, so swap
        if (smallest != i) {
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;

            // Recursively heapify the affected sub-tree 
            this.minHeapify(arr, n, smallest);
        }
    }
    heapSort(){

        let n = this.list.length - 1
        while(n>0){
            this.swap(arr, n, 0)
            n--
            this.maxHeapify(arr, n, 0)
        }
    
    }
    print(){
        console.log(' heap is -> ', this.list)
    }
    swap(arr, a , b){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}

//leaf nodes are always a heap

//create heap
let h = new heap()
// h.insert(50)
// h.insert(55)
// h.insert(53)
// h.insert(52)
// h.insert(54)
// h.insert(50)
h.print()

let input = [10,20,30, 1,2,3,4]
// let input = [50,55,53,52,54,50]
// let input = [50,55]
input.forEach(el=> h.insert(el) )
h.print()
console.log('heapsort')
// h.heapSort()
h.print()
console.log('max heapigy')
h.maxHeapify()
h.print()

h.delete()
h.print()
h.delete()
h.print()
h.insert(51)
h.print()
console.log('list is ',h.list,h.size)
