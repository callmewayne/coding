//二分查找
function binarySearch(arr,elem){
    let left = 0,
    right = arr.length - 1,
    mid = -1

    while(left <= right){
        //注意是<= 考虑只剩一个元素的情况
        mid = Math.floor((left + right) /2);

        if(arr[mid] === elem){
            return true
        }

        if(elem < arr[mid]){
            right = mid -1
        }else{
            left = mid +1
        }
    }
    return false
}
console.log(binarySearch([1, 2, 10], 2));

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

//数字在排序数组中出现的次数
//统计一个数字在排序数组中出现的次数

//排序数组，先考虑二分法排序
//寻找边界
function findBoundary(nums,target,mode){
    let left = 0,
    right = nums.length -1

    while(left < right){
        let mid = (left + right) >>1

        if(nums[mid] > target){
            right = mid - 1
        }else if(nums[mid] < target){
            left = mid + 1
        }else if(mode === 'left'){
           //nums[mid] === target
           //如果下标是0或者前一个元素不等于target
           //那么mid就是左边界
           if(mid === 0 || nums[mid -1 ] !== target){
               return mid
           }
           //否则继续在左部分遍历
           right = mid -1
        }else if(mode === 'right'){
            //nums[mid] ===target
            //如果下标是最后一位 或者 后一个元素不等于target
            //那么mid就是边界
            if(mid === nums.length - 1 || nums[mid + 1] !== target){
                return mid
            }
            left = mid + 1
        }
    }
    //left === right
    if(nums[left] === target){
        return left
    }

    return -1
}

//寻找指定数字出现的次数
function getTotalTimes(nums,target){
    const length = nums.length
    if(!length){
        return 0
    }

    return (
        findBoundary(nums,target,'right') - findBoundary(nums,target,'left')+1
    )
}

const nums = [1, 2, 3, 3, 3, 4, 5];
console.log(getTotalTimes(nums,3))

//在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
//完成一个函数，输入这样一个二维数组和一个整数，判断数组中是否含有该整数。

function findElem(arr,elem){
    let row = arr.length - 1
    col = arr[0].length - 1
    let i = 0,
    j = col

    while(i<= row && j>=0){
        if(arr[i][j] === elem){
            return true
        }
        if(elem > arr[i][j]){
            ++i
        }else{
            --j
        }
    }
return false
  
}

const arr = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]

// console.log(findElem(arr,8))
// console.log(findElem(arr, 1));
console.log(findElem(arr, 10));

