
function insertNode(node, newNode){
    console.log(`node`,node)
    console.log(`newNode`,newNode)
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
        let newNode = new Node(key)
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



}

let tree = new BinarySearchTree()
tree.insert(20);
tree.insert(10);
tree.insert(21);
tree.insert(520);
tree.insert(120);
tree.insert(521);
//tree.inOrderTraverse(printNode)
//tree.preOrderTraverse(printNode)
tree.postOrderTraverse(printNode)
console.log(tree.min())

