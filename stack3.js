function Stack(array) {
    this.array = [];
    if (array) this.array = array;
  }
  
  Stack.prototype.push = function (value) {
    this.array.push(value);
  };
  
  Stack.prototype.pop = function () {
    return this.array.pop();
  };
  
  Stack.prototype.peek = function () {
    return this.array[this.array.length - 1];
  };
  
  Stack.prototype.length = function () {
    return this.array.length;
  };
  
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(`length: ${stack.length()}`);
  console.log(`The popped element is: ${stack.pop()}`);
  console.log(`The popped element is: ${stack.pop()}`);
  console.log(stack.peek());
  stack.push(4);
  console.log(stack.peek());
  
  // output:
  // length: 3
  // The popped element is: 3
  // The popped element is: 2
  // 1
  // 4