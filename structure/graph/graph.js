function Graph(){
    //属性：顶点（数组）/边（字典）
    this.vertexes = [] //顶点

    this.edges = new Dictionay()//边

    //方法
    //添加顶点的方法
    Graph.prototype.addVertex = function(v){
        this.vertexes.push(v)
        this.edges.set(v,[])
    }

    //添加边的方法
    Graph.prototype.addEdge = function(v1,v2){
        this.edges.get(v1).push(v2)
        this.edges.get(v2).push(v1)
    }

    //实现toString方法
    Graph.prototype.toString = function(){
        var resultstring = ''

        //遍历所有的顶点以及顶点所对应的边

        for(var i = 0;i<this.vertexes.length;i++){
            resultstring += this.vertexes[i] + '->'
            var vEdges = this.edges.get(this.vertexes[i])
            for(var j = 0;j<vEdges.length;j++){
                resultstring += vEdges[j] + ' '
            }
            resultstring += '\n'
        }
        return resultstring
    }

    //广度优先算法，初始化状态颜色

    Graph.prototype.initalizeColor = function(){
        var colors = []
        for(var i = 0;i<this.vertexes.length;i++){
            colors[this.vertexes[i]] = 'white'
        }

        return colors
    }

    //实现广度优先搜索(BFS),基于队列实现
    Graph.prototype.bfs = function(firstV,handler){
       //1.初始化颜色
       var colors = this.initalizeColor()
       
       //2.创建队列
       var queue = new Queue()
       //3.将顶点加入到队列中
       queue.enqueue(firstV)

       //4.循环从队列中取出元素
       while(!queue.isEmpty()){
          //从队列中取出一个顶点
          var v  = queue.dequeue()

          //4.2.获取和顶点相连的另外顶点
          var vList = this.edges.get(v)

          //将v的颜色设置为灰色
          colors[v] = 'gray'

          //遍历所有的顶点，并且加入到队列中

          for(var i = 0;i < vList.length;i++){
           var e = vList[i]
           if(colors[e]== 'white'){
               colors[e] = 'gray'
               queue.enqueue(e)
           }
        }
          //v已经被探测，并且访问顶点
          handler(v)

          //将顶点设置为黑色

          colors[v] = 'black'
       }
    }



    //深度优先搜索

    Graph.prototype.dfs = function(firstV,handler){
        //初始化颜色
        var colors = this.initalizeColor()

        //从某个节点开始递归访问
        this.dfsVlist(firstV,colors,handler)
    }

    //
    Graph.prototype.dfsVlist = function(v,colors,handler){
        //1.将颜色设置为灰色

        colors[v] = 'gray'

        //处理顶点v
        handler(v)


        //访问V相邻的其他顶点
         var vList = this.edges.get(v)
         for(var i = 0;i<vList.length;i++){
             var e = vList[i]
             if(colors[e] == 'white'){
                 this.dfsVlist(e,colors,handler)
             }
         }

        //将V设置为黑色
        colors[v] = 'black'
    }

}

var g = new Graph()
//添加顶点
var myVertexes = ['A','B','C','D','E','F','G','H','I']

for(var i = 0;i<myVertexes.length;i++){
    g.addVertex(myVertexes[i])
}

//添加边
g.addEdge('A','B')
g.addEdge('A','C')
g.addEdge('A','D')
g.addEdge('C','D')
g.addEdge('C','G')
g.addEdge('D','G')
g.addEdge('D','H')
g.addEdge('B','E')
g.addEdge('B','F')
g.addEdge('E','I')


console.log(g.toString())

//测试BFS
var result = ''
g.bfs(g.vertexes[0],function(v){
   result += v + ' '
})
console.log(result)

//测试DFS
result = ''
g.dfs(g.vertexes[0],function(v){
    result += v + ' '
 })
 console.log(result)
