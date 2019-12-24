

// 感觉现在爸妈越来越会享受了
// 俩人游山玩水，又有自己的小事业，充实而又快乐。

// 还记得以前高考陪读那会，我妈每天下了班大老远的从西城坐最后一班公交跑到东城的家里等我放学晚上给我做顿吃的。

// 那是时候算是把全部的精力都用在了我身上，他们俩也没时间出去玩。虽然最后的结果大家也还算满意吧，但是在现在看来还差得很远。

// 来北京三年多，见证了快速发展的城市，也经历了一些不一样的事，不一而足。获得的恩赐，吃过的亏都留在了我的脑海里。

// 今年失去的东西很多，但是一想起他们俩来，那些东西都无足轻重。希望明年能多抽出一点时间陪陪他们吧，关心要留给值得的人。
//************************************************ */
//用两个栈实现一个队列。队列的声明如下
//请实现他的两个函数appendTail和deleteHead，分别完成在队列尾部插入结点和在队列头部删除节点的功能。

//思路
//一个栈用来存储插入队列数据，一个栈用来从队列中取出数据。
//从第一个栈向第二个栈转移数据的过程中：数据的性质已经从后入先出，变成了先入后出

//
class Queue{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    appendTail(value){
        this.stack1.splice(0,0,value)
    }

    deleteHead(){
        if(this.stack2.length ===0){
            let length = this.stack1.length

            for(let i = 0;i<length;++i){
                this.stack2.splice(0,0,this.stack1.shift())
            }
        }
        return this.stack2.length ===0 ? null :this.stack2.shift()
    }
}

let queue = new Queue();
queue.appendTail(1)
queue.appendTail(2)
queue.appendTail(3)

console.log(queue.deleteHead())
queue.appendTail(1)

console.log(queue.deleteHead())
console.log(queue.deleteHead())
console.log(queue.deleteHead())

