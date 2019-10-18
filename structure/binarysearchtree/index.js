
function insertNode(node, newNode){
    // console.log(`node`,node)
    // console.log(`newNode`,newNode)
    if(newNode.key < node.key) {
        node.left === null ? (node.left = newNode) : (insertNode(node.left, newNode))
    }else {
        node.right === null ? (node.right = newNode) : (insertNode(node.right, newNode))
    }
}
//中序遍历
function inOrderTraverseNode(node,cb){
    if(node !==null){
        inOrderTraverseNode(node.left,cb)
        cb(node.key)
        inOrderTraverseNode(node.right,cb)
    }
}

   // 先序排序辅助方法
   function preOrderTraverseNode(node, cb) {
    if(node !== null) {
      cb(node.key);
      preOrderTraverseNode(node.left, cb);
      preOrderTraverseNode(node.right, cb);
    }
  }
  // 后续遍历辅助方法
  function postOrderTraverseNode(node, cb) {
    if(node !== null){
      postOrderTraverseNode(node.left, cb);
      postOrderTraverseNode(node.right, cb);
      cb(node.key);
    }
  }



const printNode  = (value)=>console.log(value)

//最小值
function minNode(node){
    if(node){
        while(node && node.left != null){
            node = node.left
        }
        return node.key
    }
    return null
}


function BinarySearchTree() {
    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null
    }
    let root = null
   
    this.insert = function (key) {
        //1. 根据key创建节点
        let newNode = new Node(key)
        //2. 判断根节点是否有值
        root === null ? (root = newNode) : (insertNode(root, newNode))
    }

    //中序遍历
    //使用中序遍历可以实现对树进行从小到大排序的功能。
    this.inOrderTraverse = function(cb){
        inOrderTraverseNode(root, cb);
    }

    //先序排序
    //使用先序排序可以实现结构化输出的功能。
    this.preOrderTraverse = function(cb) {
        preOrderTraverseNode(root, cb);
      }

      // 后续遍历 --- 先访问后代节点，再访问节点本身
      //后序遍历可以用于计算有层级关系的所有元素的大小
   this.postOrderTraverse = function(cb) {
    postOrderTraverseNode(root, cb);
  }

  this.min = function(){
      return minNode(root)
  }

 this.removeNode = function(key){
   //1.先找到我们需要删除的节点，如果没有找到则不需要删除。
     var current = this.root
     var parent = null
     var isLeftChild = true
     //开始寻找要删除的节点
     while(current.key !=key){
         parent = current
         if(key < current.key){
            isLeftChild = true
            current = current.left 
        }else{
            isLeftChild = false
            current = current.right
        }
        //没有找到相等的key
        if(current == null) return false
     }

   //2.根据对应的情况删除节点
   //2.1删除的节点没有子节点
   if(current.left ==null && current.right ==null){
       if(current == this.root){
           this.root == null
       }else if(isLeftChild){
           parent.left = null
       }else{
        parent.right = null
       }
   }
   //2.2删除的情况有一个节点
   else if(current.right==null){
       if(current == this.root){
           this.root = current.left
       }else if(isLeftChild){
            parent.left = current.left
         }else{
            parent.right = current.left
         }
   } else if(current.left==null){
       if(current == this.root){
        this.root = current.right
       }else if(isLeftChild){
            parent.left = current.right
         }else{
            parent.right = current.right
         }
   }
   

   //2.3删除的情况有两个节点
   else{
       //1.获取后继节点
       var succssor = this.getSuccssor(current)

       //2.判断是不是根
       if(current==this.root){
           this.root = succssor
       }else if(isLeftChild){
           parent.left = succssor
       }else{
           parent.right = succssor
       }

       //将删除节点的左子树 = current.left
       succssor.left = current.left
   }    

 }

 this.getSuccssor = function(delNode){
     //1.定义变量，保存找到的后继
     var succssor = delNode
     var succssorParent = delNode
     var current = delNode.right

     while(current != null){
        succssorParent = succssor
        succssor = current
        current = current.left
     }

     //3.判断寻找的后继节点是否直接就是delNode的right节点
     if(successor != delNode.right){
        succssorParent.left = succssor.right
        successor.right = delNode.right
     }

     return succssor
 }

}

let tree = new BinarySearchTree()
tree.insert(20);
tree.insert(10);
tree.insert(21);
tree.insert(520);
tree.insert(120);
tree.insert(521);
tree.inOrderTraverse(printNode)
//tree.preOrderTraverse(printNode)
//tree.postOrderTraverse(printNode)
// console.log(tree.min())
console.log(tree)
