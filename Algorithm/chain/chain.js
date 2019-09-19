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
}

const linkedList = new LinkedList()
linkedList.push(5)
console.log(linkedList)
