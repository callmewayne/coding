//动态规划背包问题
//c[i][j] 表示前i个物品，装入容量为j的最大价值
//v[i]表示第i件物品的价值
//w[i]表示每件物品的重量

//W表示背包的容量
// const wList = [6,3,5,4,6]
// const vList = [2,5,4,2,3]
// const map = {}
function maxValue(v,w, W){
   var n = v.length;
   var c= []
   var use = []
   for(var i = 0;i<=n;i++){
       c[i] = [];
       use[i] = 0
       for(var j = 0;j<=W;j++){
           if(i==0 || j==0){
               c[i][j] = 0
           }
       }
   }

   v.unshift(0)//第0件物品，价值为0
   w.unshift(0)//第0件物品，重量为0
   for(var i = 1;i<=n;i++){
        for(var j = 1;j <= W;j++){
            if(j < w[i]){
               c[i][j] = c[i-1][j]
            }else{
                c[i][j] = Math.max(c[i-1][j],c[i-1][j-w[i]] + v[i])
            }
        }
   }

   var j = W
   for(var i =n;i>0;i--){
       if(c[i][j] > c[i-1][j]){
           use[i] = 1
           j=j-w[i]
       }
   }
   console.log(use)
   return c[n][W]
}

console.log(maxValue([6,3,5,4,6],[2,5,4,2,3],10))

//完全背包
//1.商品不限制重复次数
//状态转移方程：
//f[i][j] = max(f[i - 1][j],f[i-1][j-K * w[i] + K* v[i]])，且0 < k < j/w[i]

const bag = 61
const goodList =  [{
    name: 'apple',
    w: 2,
    v: 2
  }, {
    name: 'book',
    w: 3,
    v: 7
  }, {
    name: 'iphone',
    w: 5,
    v: 40
  }, {
    name: 'mac',
    w: 20,
    v: 70
  }]
  const goodLength = goodList.length;

  const wList = goodList.map(item=>{
      return item.w
  })

  const vList = goodList.map(item=>item.v)
const nList = goodList.map(item=>item.name)

const map = {}
function getMax(i,j){
   let count = Math.floor(j / wList[i])
   if(i===0){
       map[i] = map[i] || {}
       map[i][j] = count
       return count * vList[i]
   }

   if(count === 0){
       map[i] = map[i] || {}
       map[i][j] = 0
       return getMax(i-1,j)
   }else{
       let maxIdx = 0;
       let maxVal = 0
       for(let k = 1;k<count + 1;k++){
           let kr = getMax(i - 1,j - wList[i] * k) + vList[i] * k;
           if(kr > maxVal){
               maxVal = kr
               maxIdx = k
           }
       }
       map[i] = map[i] || {}
       map[i][j] = maxIdx
       return maxVal
   }
}

const val = getMax(goodLength - 1 ,bag)
let bagCost = 0;
function getSelect(i,j){
    if(i < 0){
        return
    }
    let count = 0;
    if(map[i] && map[i][j]){
        count = map[i][j]
    }
    bagCost += wList[i] * count
    console.log(`物品${nList[i]} x ${count}`)
    getSelect(i - 1,j - count * wList[i])
}

getSelect(goodLength - 1,bag)
