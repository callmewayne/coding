function reverseList(head){
   let current = null
   let headNode = head
   while(head && head.next){
       current = head.next
       head.next = current.next
       current.next = headNode
       headNode = current
   }
   return headNode
}



