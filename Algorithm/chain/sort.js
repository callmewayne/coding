

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

function swap (p,q){
    if(p || q){
        let val = p.val
        p.val = q.val
        q.val = val
    }
  
}
  
function partion (begin,end){
    
    let val = begin.val
    let p = begin
    let q = begin.next
    while(q !==end){
        if(q.val < val){
            p = p.next
            swap(p,q)
        }
        q = q.next
    }
    //让基准元素到中间去
    swap(p.begin)

 return p    
}

function sort (begin,end){
    if(begin !== end){
        let part = partion(begin,end)
        sort(begin,part)
        sort(part.next,end)

    }
}

