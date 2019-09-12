// function findFirshtCommonNode(pHead1,pHead2){
//      if(!pHead1 || !pHead2){return null}
//      let length1 = getLength(pHead1)
//      let length2 = getLength(pHead2)

//      //长链表先行,interval两个链表间的间距
//      let lang,short,interval;
//      if(length1 > length2){
//          lang = pHead1
//          short = pHead2
//          interval = length1 - length2
//      }else{
//          lang = pHead2
//          short = pHead1
//          interval = length2 - length1
//      }
  
//      //先让长链表先行interval的长度，确保开始比较时，两个链表长度相等
//      while(interval--){
//          lang = lang.next
//      }

//      //当lang存在时，寻找相同节点
//      while(lang){
//          //当第一次两个节点的值相等时返回第一个公共节点
//          if(lang.val === short.val){
//              return lang
//          }
//          //lang,short一起前进
//          lang = lang.next
//          short = short.next
//      }
//      return null

// }

// function getLength(head){
//     var length = 0
//     let current = head
//     while(current !=null){
//         current = current.next
//         length++
//     }
//     return length
// }

// 1.先找到两个链表的长度length1、length2

// 2.让长一点的链表先走length2-length1步，让长链表和短链表起点相同

// 3.两个链表一起前进，比较获得第一个相等的节点


function findFirshtCommonNode(pHead1,pHead2){
     if(!pHead1 || !pHead2){return null}

     let length1 = getLength(pHead1)
     let length2 = getLength(pHead2)
     
     let lang,short,interval

      if(length1 > length2){
          lang = pHead1
          short = pHead2
          interval = length1- length2
      }else{
          lang = pHead2
          short = pHead1
          interval = length2- length1
      }

      while(interval-- > 0){
          lang = lang.next
      }

      while(lang){
          if(lang.val == short.val){
              return lang
          }
          lang = lang.next
          short = short.next
      }

      return null

}



function getLength(head){
    let current = head
    let length = 0
    while(current){
        current = current.next
        length++
    }
    return length
}
