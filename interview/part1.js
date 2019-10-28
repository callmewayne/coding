//Array数组的flat方法实现
var arr1 = [1,2,[3,4]]

//扁平化数组
Array.prototype.flat = function(){
    var arr = []
    this.forEach((item,index)=>{
        if(Array.isArray(item)){
            arr = arr.concat(item.flat())
        }else{
            arr.push(item)
        }
    })
    return arr
}

console.log(arr1.flat())

//爬楼梯问题
//Q:有一楼梯共M级，刚开始你在一级，若每次只能跨上一级或二级，要走上第M级，共有多少种走法。
//斐波那契数列

function cStairs(n){
    if(n===1 || n===2){
        return 1
    }else{
        return cStairs(n-1) + cStairs(n-2)
    }
}

//二分查找
//是在一个有序的队列里查找到某一个值

function binaryFind(arr,target){
    var low = 0,
    high = arr.length - 1,
    mid;
    
    while(low <= high){
        mid = Math.floor((low + high)/2)
        if(target === arr[mid]){
            return `找到了${target},在第${mid}个`
        } 

        if(target > arr[mid]){
            low = mid+1
        }else{
            high = mid -1
        }
    }
    return -1
}
console.log(binaryFind(arr1.flat(),3))

