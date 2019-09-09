//1. 在旧链表中，复制每一个节点，并将复制的节点插入该节点的后面

//2.遍历链表，初始化复制节点的random指向。

//3.将链表拆分为原链表和复制所得链表


function RandomListNode(x){
    this.val = x
    this.next = null;
    this.random = null
}

function clone(pHead){
    if (pHead === null) return;

    // 1. 在旧链表中，复制每一个节点，并将复制的节点插入该节点的后面
    var currNode = pHead;
    while (currNode !== null) {
        var node = new RandomListNode(currNode.val);
        node.next = currNode.next;
          //复制每一个节点，并将复制的节点插入该节点的后面
        currNode.next = node;
        //将当前结点后移一位，此时phead也跟着currNode随之改变
        currNode = node.next;
    }

    // 2.遍历链表，初始化复制节点的random指向。
    currNode = pHead;
    while (currNode !== null && currNode.next !== null) {
        if (currNode.random) {
            currNode.next.random = currNode.random.next;
        }
        //currNode取下一结点的下一节点
        currNode = currNode.next.next;
    }

    //3.将链表拆分为原链表和复制所得链表      
    //取出复制的链表  
    var pCloneHead = pHead.next;
    var tmp = null;
    currNode = pHead;
    while (currNode.next !== null) {
        //将复制的值放到临时变量中
        tmp = currNode.next;
        //拆分原链表和复制所得链表
        currNode.next = tmp.next;
        //当前结点后移一位
        currNode = tmp;
    }
    return pCloneHead;

   
}