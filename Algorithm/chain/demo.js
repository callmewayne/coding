
function Node(value){
    this.val = value
    this.next = null
}

//声明链表
 function NodeList(arr){
    //声明链表的头部节点
    let head = new Node(arr.shift())
    let next = head
    arr.forEach(item=>{
          next.next = new Node(item)
          next = next.next
    })

     return head
}



//打印链表
function printChain(head){
    var arr = []
    while(head){
        arr.unshift(head.val)
        head = head.next
    }
    return arr
}

//反转链表
function reverseList(head){
    let current = null
    let headNode = head
    while(head && head.next){
        //设置当前指针
        current = head.next
        //head指针向前一位
        head.next = current.next
        //将当前指针的下一位，设置为头指针
        current.next = headNode
        //再将当前指针赋值给头指针，完成反转
        headNode = current
    }
    return headNode
}

//合并链表
function Merge(pHead1,pHead2){
    if(!pHead1){
        return pHead2
    }
    if(!pHead2){
        return pHead1
    }
    let head
    //链表头部节点比较，取较小节点
    if(pHead1.val < pHead2.val){
        //小节点的next等于小节点的next和大节点的较小值
        head = pHead1
        head.next = Merge(pHead1.next,pHead2)
    }else{
        head = pHead2
        head.next = Merge(pHead1,pHead2.next)
    }
    //返回小节点
    return head
}

//链表倒数第K个节点
function FindKthToTail(head,k){
    if(!head || !k)return null
    let front = head
    let behind = head
    let index = 1
    while(front.next){
        index++
        front = front.next
        if(index > k){
            behind = behind.next
        }
    }
    return (k<=index) && behind
}


//删除链表倒数第n个结点

function removeNthFromEnd(head,n){
    if(!head || !n) return null
    let fisrt = head,second = head
    //双指针，先让first指针先行N步
    while(n>0){
        n--
        fisrt = fisrt.next
    }
// 等n消耗完后,first和second一起前进
    while(fisrt.next){
        fisrt = fisrt.next
        second = second.next
    }
    second.next = second.next.next
    //返回的是head
    return head
}

//删除链表中的重复节点
function deleteDuplication(pHead){
    var map = {}
   if(pHead && pHead.next){
       let current = pHead
       while(current){
           const count = map[current.val]
           map[current.val] = count?count+1:1
            current = current.next
       }

       current = pHead
       while(current){
           const count = map[current.val]
           if(count >1){
            if(current.next){
                current.val = current.next.val;
                current.next = current.next.next
              //  map[current.val]-- //如果删除多于的数组可加上这一条
            }else if(current === pHead){
                current = null
                pHead = null
            }else{
                current = pHead
                while(current.next.next){
                    current = current.next
                }
                current.next = null
                current = null
              
            }
           }
              else{
               current = current.next
           }
         
       }

     
   }
   return pHead
}



