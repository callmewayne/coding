//diff函数，对比两棵树
function diff(oldTree,newTree){
    var index = 0 //当前结点的标志
    var patches = {}
    dfsWalk(oldTree,newNode,index,patches)
    return patches
}

//对比两棵树进行深度优先遍历
function dfsWalk(oldNode,newNode,index,patches){
    //对比oldNode和newNode的不同，记录下来
   var currentPatch = []

   //Node is removed
//    if(newNode === null){

//    }else if(oldNode.isString())
}

