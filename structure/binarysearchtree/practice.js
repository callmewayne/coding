//二叉搜索树与双向链表
function Convert(pRootOfTree){
     if(!pRootOfTree){
         return null
     }
     var lastNode = null
     lastNode = ConvertNode(pRootOfTree,lastNode)
     var head = lastNode
     while(head && head.left){
         head = head.left
     }
     return head
}

function ConvertNode(node,lastNode){
    if(!node){
        return
    }
    if(node.left){
        lastNode = ConvertNode(node.left,lastNode)
    }
    node.left = lastNode
    if(lastNode){
        node.right = node
    }
    lastNode = node

    if(node.right){
        lastNode = ConvertNode(node.right,lastNode)
    }
    return lastNode
}
//从上到下打印二叉树
function PrintFromTopToBottom(root){
    var queue = []
    queue.push(root)
    var result = []
    if(root == null){
        return result
    }

    while(queue.length){
        var temp = queue.shift()

        result.push(temp.val)

        if(temp.left){
            queue.push(temp.left)
        }
        if(temp.right){
            queue.push(temp.right)
        }
    }

    return result
}

let convertree = new BinarySearchTree()
convertree.insert(20);
convertree.insert(10);
convertree.insert(21);
convertree.insert(520);
convertree.insert(120);
convertree.insert(521);
console.log(convertree)
console.log(PrintFromTopToBottom(convertree))