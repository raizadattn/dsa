function Queue(array) {
    this.array = [];
    if (array) this.array = array;
  }
  
  Queue.prototype.enqueue = function (value) {
    return this.array.push(value);
  };
  
  Queue.prototype.dequeue = function () {
    return this.array.shift();
  };
  
  Queue.prototype.peek = function () {
    return this.array[0];
  };
  
  Queue.prototype.front = function () {
    return this.array[0];
  };
  
  Queue.prototype.back = function () {
    return this.array[this.array.length - 1];
  };
  
  Queue.prototype.toString = function () {
    return this.array.map((queue) => queue).join(" ");
  };
  
  Queue.prototype.isEmpty = function () {
    return this.array.length === 0;
  };
  
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(`Front of queue: ${queue.front()}`);
  console.log(`Back of queue: ${queue.back()}`);
  console.log(queue.toString());
  queue.dequeue();
  queue.dequeue();
  console.log(queue.toString());
  
  // output:
  // Front of queue: 1
  // Back of queue: 3
  // 1 2 3
  // 3