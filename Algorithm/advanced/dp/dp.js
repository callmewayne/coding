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
