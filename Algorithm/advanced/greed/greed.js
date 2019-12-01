//贪心算法，买卖股票的最佳时机
//1.从最低点买入，在最高点卖出
//
//从低点买入，到价格高点卖出，不断买卖（在保证单次利益的基础上，实现多次交易）
function maxPrice(prices){
let count = 0;
   for(let i = 0,len=prices.length;i<len;i++){
       for(let j = i;j<len-1;j++){
          if(prices[j+1]>prices[j]){
             count += prices[j+1]-prices[j]
             i = j
          }else{
             i = j
             break
          }
       }
   }
return count
}
console.log(maxPrice([7,1,5,3,6,4]))


//柠檬水找零钱
//策略1，给钱找零，不区分金额直到找到足够的零钱（追求单次找零）
//策略2给钱找零，优先给金额最大的零钱，尽量把零钱放在手里（追求多次找零）
function lemonChange(bills){
   //钱箱
  let hand = []
  //当还有客户时一直找零
  while(bills.length){
     //获取最前排顾客的钱
     let money = bills.shift()
     //如果当钱为5时不需要找零，直接放入钱箱
     if(money===5){
        hand.push(money)
     }else{
        //先把手里的零钱降序排列，先给最大的钱
      hand.sort((a,b)=>b-a)
      //顾客的钱减去饮料的钱就是给顾客的钱
      let change = money - 5
        for(let i =0,len=hand.length;i<len;i++){
           //如果最大票小于零钱
           if(hand[i]<=change){
              //将最大票找给顾客，计算出还需要多少零钱
            change-=hand[i]
           //同时将当前的零钱删除
            hand.splice(i,1)
            //删除数组后，长度发生变化，要维护i的值不变，所以i--
            i--
           }
           //如果找零成功，跳出循环
           if(change===0){
            break
           }
       
        }
        //如果没有足够的零钱找给顾客，return false
        if(change!==0){
         return false
        }else{
           //如果找开零钱了，把钱放到零钱箱里
         hand.push(money)
        }
     }
     
  }
  return true
}
console.log(lemonChange([5,5,5,10]))