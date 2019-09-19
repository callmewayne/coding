class Stack{
    constructor(){
        this.count = 0;
        this.items = {}
    }

    push(element){
      this.items[this.count]= element;
      this.count++
    }
    //验证一个栈是否为空
    isEmpty(){
        return this.count===0
    }
    
    //从栈中弹出元素
    pop(){
       if(this.isEmpty()){
           return undefined
       }

       this.count--
       let result = this.items[this.count]
       delete this.items[this.count]
       return result
    }
    //返回栈的大小
    size(){
        return this.count
    }
    //返回栈顶值，不改变栈
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.count-1]
    }
    clear(){
        this.items = {}
        this.count = 0
    }

    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString =`${this.items[0]}`
        for(let i =1; i<this.count;i++){
            objString =`${objString},${this.items[i]}`
        }
        return objString
    }
}

const stack = new Stack()
stack.push(5)
stack.push(8)
console.log(stack)
console.log(stack.size())
console.log(stack.peek())
// console.log(stack.pop())
// console.log(stack.pop())
console.log(stack.toString())

