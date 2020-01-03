//在arr[left,right]中顺序查找最小值
function orderSearchMin(arr,left,right){
    let min = arr[left]
    for(let i = left + 1;i<= right;++i){
        arr[i] < min && (min = arr[i]);
    }
    return min
}

function binSearchMin(arr){
    if(!Array.isArray(arr) || !arr.length){
        throw Error('Empty Array')
    }

    let left = 0,
    right = arr.length - 1,
    mid = null
    
    while(left < right){
        if(right ===1 + left){
            return arr[right]
        }
        mid = Math.floor((left + right) / 2)
        if(arr[mid] === arr[left] && arr[mid] ===arr[right]){
            return orderSearchMin(arr,left,right)
        }

        if(arr[mid] >= arr[left]){
            //最小值在右边
            left = mid
        }else if(arr[mid] <= arr[right]){
            right = mid
        }
    }
    console.log(arr)
   return arr[right]
}
// console.log(binSearchMin([3, 4, 5, 1, 2]));
//console.log(binSearchMin([2, 3, 4, 5, 1]));
console.log(binSearchMin([2, 2, 2, 1, 1, 2]));


//统计一个数字在排列数组中出现的次数

