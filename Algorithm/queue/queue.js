class Queue{
    constructor(){
        this.count = 0
        this.lowestCount = 0;
        this.items = {}
    }
    isEmpty(){
        return this.count - this.lowestCount === 0
    }
    enqueue(element){
     this.items[this.count] = element
     this.count++
    }

    dequeue(){
       if(this.isEmpty()){
           return undefined
       }

       const result = this.items[this.lowestCount]
       delete this.items[this.lowestCount]
       this.lowestCount++
       return result
    }
     
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return  this.items[this.lowestCount]
    }

    size(){
        return this.count - this.lowestCount
    }
}


const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue('John')
queue.enqueue('Jack')


queue.enqueue('wayne')
queue.dequeue()
console.log(queue)
