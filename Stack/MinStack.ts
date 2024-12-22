class MinStack{
    stack: number[]
    constructor(){
        this.stack= []
    }
    push(val: number):void{
        this.stack.push(val)
    }
    pop():void{
        this.stack.pop()
    }
    top():number{
        return this.stack[this.stack.length-1]
    }
    getMin(): number{
        if(this.stack.length == 0){
            throw new Error('Stack is Empty')
        }
        let min: number = this.stack[0]
        for(let i = 0; i < this.stack.length; i++){
            if(this.stack[i] < min){
                min = this.stack[i]
            }
        }
        return min
    }
}

const minStack = new MinStack();
minStack.push(5);
minStack.push(3);
minStack.push(7);
console.log(minStack.getMin()); // Output: 3
minStack.pop();
console.log(minStack.top());   // Output: 3
console.log(minStack.getMin()); // Output: 3
minStack.pop();
console.log(minStack.getMin()); // Output: 5