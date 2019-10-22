function Queue(){
    this.items= []
    //1.将元素添加到队列中
    Queue.prototype.enqueue = function(element){
        this.items.push(element)
    }
   
    //2. 从队列中删除前端元素 
    Queue.prototype.dequeue = function(){
        return this.items.shift()
    }

    //3.查看前端的元素
    Queue.prototype.front = function(){
        return this.items[0]
    }

    //4.查看队列是否为空
    Queue.prototype.isEmpty = function(){
        return this.items.length === 0
    }
    

}