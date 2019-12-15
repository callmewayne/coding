//动态规划
//状态转移方程，边界
function dp(arr,m,n){
   let dpFn = (m,n)=>{
       if(m===2 && n===2){
           return (arr[1][1]===1 || arr[1][0] + arr[0][1]===2)?0:(arr[1][0] ===1 || arr[0][1]===1)?1:2
       }else if( m < 2 || n < 2){
                 if(m<2){
                     return arr[m-1].includes(1)?0:1
                 }else{
                     for(let i = 0;i<m;i++){
                         if(arr[i][0]===1){
                             return 0
                         }
                     }
                     return 1
                 }

       }else{
           return dpFn(m - 1,n) + dpFn(m,n - 1)
       }
   }
   return dpFn(m,n)
}
let testArr1=[
    [0,0,0],
    [0,1,0],
    [0,0,0],
]
console.log(dp(testArr1,3,3))

//787,k站中转最便宜航班
//
function findCheapestPrice(src,dst,k){
     //对n个城市m个航班做飞行说明
    let fights = [
       [0,1,100],
       [1,2,100],
       [0,2,500]
   ]
   let cheap = (src,dst,k)=>{
       //找到dst的前一站
      let prev = fights.filter(item=>item[1]===dst)
      let min = Math.min.apply(null,prev.map(item=>{
        //从dst往前找，如果  
        if(item[0]===src && k>-1){
              return item[2]
          } else if(k===0 && item[0]!==src){
              return Number.MAX_SAFE_INTEGER
          }else{
              return item[2]+cheap(src,item[0],k-1)
          }
      }))
      return min
   }
   return cheap(src,dst,k) || -1
}
console.log(findCheapestPrice(0,2,0))

//JS查找两个字符串中最长的公共子串
function maxSubString(str1,str2){
    let temp = new Array()
    let max = 0
    let index = null
    for(let i = 0;i<str1.length;i++){
        //初始化为二维数组
        temp[i] = new Array()
        for(let j = 0;j<str2.length;j++){
            //比较两个位置是否相等，相等就让temp[i][j]相对于temp[i-1][j-1]加一（前提是temp[i-1][j-1]存在）
            if(str1.charAt(i) === str2.charAt(j)){
                if(i>0 && j>0 && temp[i-1][j-1]>0){
                    temp[i][j] = 1 + temp[i-1][j-1]
                }else{
                    temp[i][j] = 1
                }
                //保存当前temp中最大的值，并且标记位置后移
                if(max < temp[i][j]){
                    max = temp[i][j]
                    index = i
                }else{

                }
            }else{
                temp[i][j] = 0
            }
        }
    }
    console.log(max+'+'+index)
    console.log(temp)
    return str1.substr(index - max + 1,max)
}
console.log(maxSubString('acbcbcef','abcbced'))


//爬楼梯问题
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。
function climbStairs (n){
   let dp = []
   dp[0] = 1
   dp[1] = 1
   for(let i = 2;i<=n;i++){
       dp[i] = dp[i-1]+dp[i-2]
   }
   return dp[n]
}

console.log(climbStairs(3))
