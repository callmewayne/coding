function maxSubArray(nums){
    let ans = nums[0]
    let sum = 0
    let arr = []
    for(let num of nums){
        if(sum>0){
            sum+=num
            arr.push(num)
        }else{
            
            sum = num
        }
        ans = Math.max(ans,sum)
    }
    console.log(arr)
    return ans
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

function maxSubArray2(nums){
     if(!nums.length){
         return
     }
     let max_ending_here = nums[0]
     let max_so_far = nums[0]

     for(let i =1;i<nums.length;i++){
        max_ending_here =Math.max(nums[i],max_ending_here+nums[i])
        max_so_far = Math.max(max_so_far,max_ending_here)
     }
     return max_so_far
}

console.log(maxSubArray2([-2,1,-3,4,-1,2,1,-5,4]))