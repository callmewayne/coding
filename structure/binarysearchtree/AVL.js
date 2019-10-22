function Node(key){
   this.data = key
   this.left = null
   this.right = null
}

function AVL(arr){
    this.root = null
    this.createAVL(arr)
}
AVL.prototype.insertNode = function(node,key){
    if(node ===null){
        node = new Node(key)
    } else{
        if(key < node.data){
            node.left = this.insertNode(node.left,key)
            node = this.balanceAVL(node)
        }else if(key > node.data){
            node.right = this.insertNode(node.right,key)
            node = this.balanceAVL(node)
        }
    }
    return node
}
// AVL.prototype.balanceAVL=function(root){
//     if(root===null) return root
//     let lHeight = this.
// }
AVL.prototype.createAVL = function(arr){
    const len = arr.length
    if(len===0) return null
    let root = null
    const res = []
    for(let i = 0;i<len;i++){
        if(res.indexOf(arr[i]) === -1){
            root = this.insertNode(root,arr[i])
            root.push(arr[i])
        }
    }

    this.root = root
}





