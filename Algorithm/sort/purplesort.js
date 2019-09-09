const purplesort =(arr)=>{
    //冒泡排序
    for(let i =arr.length-1,tmp;i>0;i--){
            for(let j=0;j<i;j++){
                 tmp = arr[j]
                 if(tmp>arr[j+1]){
                     arr[j] = arr[j+1]
                     arr[j+1] = tmp 
                 }
            }
    }
    return arr
}
let sortArr = [1,3,6,9]
console.log(purplesort(sortArr))

const selectSort = (arr)=>{
   for(let i =0,len=arr.length,min;i<len;i++){
       min = arr[i]
       for(let j =i+ 1;j<len;j++){
           if(arr[j]<min){
               let c= min;
               min = arr[j]
               arr[j]=c
           }
       }
       arr[i] = min
   }
   return arr
}
console.log(selectSort(sortArr))

// const maxnumGap = (arr)=>{
//     //先判断长度是否大于0
//     if(arr.length<2){
//         return 0
//     }else{
//         //现对原数组进行排序
//         arr.sort()

//         let max = 0
//         //遍历数组，取两位相邻数的差值，
//         for(let i = 0,len=arr.length-1,tmp;i<len;i++){
//            tmp = arr[i+1] -arr[i]
//             if(max<tmp) max =tmp
//         }
//      return max
//     }
// }

// console.log(maxnumGap(sortArr))

//最大间距
const maxnumGap = (arr)=>{
  if(arr.length<2){
      return 0
  }
  let max= 0
  let len  = arr.length-1
  let gap 
  for(let i = len,tmp;i>0;i--){
     for(let j = 0 ,tmp;j<i;j++){
         tmp = arr[j]
         if(tmp>arr[j+1]){
             arr[j] = arr[j+1]
             arr[j+1] = tmp
         }

     }
     if(i<len){
      gap = arr[i+1] - arr[i]
      if(gap > max){
          max = gap
      }
     }
  }
  return Math.max(max, arr[1] - arr[0]) 
}
let maxnumGapArr = [1,3,6,9]
console.log(maxnumGap(maxnumGapArr))

//922按奇偶排序数组
const sortArrayByParity = (arr)=>{
    //进行降序排序
    arr.sort((a,b)=>a-b)
    //声明一个空数组，用来存储排序后的数组
    let r= []
    let odd = 1
    let even = 0
      arr.forEach(item => {
          if(item%2===1){
             r[odd] =item
             odd +=2
          }else{
             r[even] = item
             even +=2
          }
      });
    return r
}
let parityArr = [4,7,9,8,1,2]
console.log(sortArrayByParity(parityArr))