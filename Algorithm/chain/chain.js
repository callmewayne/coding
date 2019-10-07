// function Node(value){
//     this.val = value
//     this.next = null
// }

// //声明链表
//  function NodeList(arr){
//     //声明链表的头部节点
//     let head = new Node(arr.shift())
//     let next = head
//     arr.forEach(item=>{
//           next.next = new Node(item)
//           next = next.next
//     })

//      return head
// }
class Node{
    constructor(value){
        this.element = value
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.count =0;
        this.head=null
    }

    push(element){
        const node = new Node(element)
        let current;
        if(this.head == null){
            this.head = node
        }else{
            current = this.head
            while(current.next !=null){
                current = current.next
            }
            current.next = node
        }
      this.count++
    }

    removeAt(index){
        if(index>=0 && index < this.count){
            let current = this.head
            if(index===0){
                this.head = current.next
            }else{
                let previous;
                for(let i = 0;i<index;i++){
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            this.count--
            return current.element
        }
        return undefined
    }

    getElementAt(index){
        if(index >= 0 && index<=this.count){
            let node = this.head
            for(let i = 0;i<index && node !=null;i++){
                 node = node.next
            }
            return node
        }
        return undefined
    }


     insert(element,index){
         if(index >= 0 && index <= this.count){
             let node = new Node(element)
             if(index==0){
                 let current = this.head
                 node.next = current
                 this.head = node
             }else{
                 const previous = this.getElementAt(index-1)
                 let  current  = previous.next
                 node.next = current
                 previous.next = node
             }
             this.count++
             return true
         }
         return false
     }
}

const linkedList = new LinkedList()
linkedList.push(5)
linkedList.push(6)


// console.log(linkedList.getElementAt(1))
linkedList.insert(8,1)
console.log(linkedList)
