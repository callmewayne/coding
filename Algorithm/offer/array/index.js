//数组顺序调整
//输入一个整数数组,实现一个函数来调整该数组中数字的顺序，
//使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

//思路：
//先写交换数组函数，然后将满足一定条件的元素都移动到数组的前面，不满足的移动到后面

//数组两头分别有一个指针，然后向中间靠拢，符合条件就一直向中间移动，不符合条件就停下来指针，交换两个元素，直到两个指针相遇

//交换数组元素

const swap = (arr,i,j) => ([arr[i],arr[j]] = [arr[j],arr[i]])


function change(brr,compareFn){
    const arr = [...brr]
    length = brr.length;
    let i = 0,
    j = arr.length - 1
    //双向链表指针向中间靠拢

    while(i<j){
        //符合条件就向中间靠拢，
        while(i < length && compareFn(arr[i])){
            ++i;
        } 
        while(j>=0 && !compareFn(arr[j])){
            --j
        }
        //不符合条件就停下来指针，交换两个元素
        if(i<j){
            //交换两个元素；
            swap(arr,i,j);
            //然后继续移动，直到两个指针相遇。
            ++i;
            --j
        }
    }
    return arr
}

const isOdd = num=>(num & 1)=== 1
console.log(change([1,3,7,4,6,9,7,2],isOdd))


//把数组排成最小的数
//输入一个正整数数组，把数组里所有数字拼接起来，打印能拼接出的所有数字中最小的一个

function printMinNumber(numbers){
    numbers.sort((x,y)=>{
        const s1 = x + '' + y,
        s2 = y+''+x
        if(s1<s2)return -1
        if(s1>s2) return 1
        return 0
    })
    console.log(numbers.join(""));
}
printMinNumber([2, 1, 4]);

//输入一个数组，求出这个数组中的逆序对的总数
//例如在数组{7,5,6,4}中，一共存在5个逆序对，分别是（7,6），（7,5），（7,4），（6,4），（5,4）

// function findInversePairNum(arr,start,end){
//     if(start === end){
//         return 0
//     }

//     const copy = new Array(end - start +1)
//     const length = Math.floor((end - start) / 2 )
//     const leftNum = findInversePairNum(arr,start,start+length)
//     const rightNum = findInversePairNum(arr,start + length +1 ,end)

//     let i = start + length,//左子数组最后一个下标
//     j = end ,//右子数组最后一个下标
//     count = 
// }
