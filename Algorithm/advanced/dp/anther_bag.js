

function knapsack(weights,values,W){
    var n = weights.length - 1
    var f = [[]]
    for(var j = 0; j<=W;j++){
        //如果容量放不下物体0的重量，那么价值为0
        if(j<weights[0]){
           f[0][j] = 0
        }else{//否则就等于物体0的价值
           f[0][j] = values[0]
        }
    }
    for(var j = 0;j<=W;j++){
        for(var i = 1;i<=n;i++){
            if(!f[i]){//创建新一行
                f[i] = []
            }
            if(j<weights[i]){//等于之前的值
                f[i][j] = f[i-1][j]
            }else{
                f[i][j] = Math.max(f[i-1][j],f[i-1][j-weights[i]]+values[i])
            }
        }
    }
    // var use = []
    // var j = W,w=0
    // for(var i = n;i>0;i--){
    //     if(f[i][j]>f[i-1][j]){
    //         use.push(i)
    //         j= j-weights[i]
    //         w = w+weights[i]
    //     }
    // }
    //  console.log(use)
    return f[n][W]
}
function knapsackII(weights,values,W){
    var n = weights.length
    var f = new Array(n)
    //填充f[-1]为零，就可以不用区分 i==0与0>0的情况
    f[-1] = new Array(W+1).fill(0)
    for(var i = 0; i<n;i++){
        //如果容量放不下物体0的重量，那么价值为0
        f[i] = []
        for(var j = 0;j<=W;j++){
          if(j < weights[i]){
              f[i][j] = f[i-1][j]
          }else{
              f[i][j] = Math.max(f[i-1][j],f[i-1][j-weights[i]]+values[i])
          }
        }
    }
    var  j = W,w= 0
    var use = []
    for(var i =n-1;i>=0;i--){
        if(f[i][j]>f[i-1][j]){
            use.push(i)
            j = j-weights[i]
            w = w + weights[i]
        }
    }
   
   
    return [f[n-1][W],use.reverse()]
}
// var a = knapsack([2,2,6,5,4],[6,3,5,4,6],10)
// console.log(a)
var a = knapsackII([2,2,6,5,4],[6,3,5,4,6],10)
console.log(a)


function completeKnapsack(weights,values,W){
     var f= [],n = weights.length
     f[-1] = []
     for(var i =0;i<=W;i++){
         f[-1][i] = 0
     }

     for(var i=0;i<n;i++){
         f[i] = []
         for(var j = 0;j<=W;j++){
           if(j<weights[i]){
               f[i][j] = f[i-1][j]
           }else{
               f[i][j] = Math.max(f[i-1][j],f[i][j-weights[i]]+values[i])
           }
         }
     }
     return f[n-1][W]
}

var b = completeKnapsack([3,2,2],[5,10,20],5)
console.log(b)
