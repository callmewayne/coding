function clone(pHead){
    if(pHead===null)return null
    cloneNodes(pHead)
    cloneRandom(pHead)

    return reconnectNodes(pHead)
}

function cloneNodes(pHead){
    var current = pHead;
    while(current){
        var cloneNode = {
            label:current.label,
            next:current.next
        }
        current.next = cloneNode
        current = cloneNode.next
    }
}

function cloneRandom(pHead){
    var current = pHead
    while(current){
        var cloneNode = current.next
        if(current.random){
            cloneNode.random = current.random.next
        }else{
            cloneNode.random = null
        }
        current=cloneNode.next
    }
}

function reconnectNodes(pHead){
       var cloneHead = pHead.next
       var cloneNode = pHead.next
       var current = pHead
    while(current){
        current.next = cloneNode.next
        current = cloneNode.next
        if(current){
            cloneNode.next = current.next;
            cloneNode = current.next
        }else{
            cloneNode.next = null
        }
    }
   return cloneHead;
}





