// function deleteNode(head,node){
//       if(node.next){
//           node.val = node.next.val
//           node.next = node.next.next
//       }else if(node === head){
//          head = null
//          node = null

//       }else{
//          node = head
//          while(node.next.next){
//              node = node.next
//          }
//          node.next = null
//          node =  null
//       }

//       return node
// }


//删除链表的倒数第N个节点
//示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.


//思路
//1.这道题用双指针实现，先用first指针前进N,然后让second从head开始和first一起前进，知道first进入了末尾，此时的second的下一个节点就是要删除的节点，
//（另外，若first一开始前进n就不在，链表中，说明要删除的节点就是head节点，那么直接返回head的下一个节点）
function removeNthFromEnd(head,n){
    let first= head,second = head
    while(n>0){
       first = first.next
       n--
    }
    if(!first) return head.next//若first一开始前进n就不在，链表中，说明要删除的节点就是head节点，那么直接返回head的下一个节点
    while(first.next){
       first = first.next
       second = second.next
    }

    second.next = second.next.next

    return head

}