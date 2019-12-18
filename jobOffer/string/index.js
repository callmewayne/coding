//字符串全排列
//输入字符串abc，则打印出由字符串abc所能排列出来的所有字符串
//能排列出来的所有字符串 abc、acb、bac、bca、cab 和 cba。

//交换数组指定坐标的两个元素
function swap(arr,i,j){
   [arr[i],arr[j]] = [arr[j],arr[i]]
}

//检测arr[start,end]中是否有和arr[end]相等的元素
function check(arr,start,end){
    for(let i =start;i<end;++i){
        if(arr[end] === arr[i]){
            return false
        }
    }
    return true
}

//全排列
function perm(arr= [],n=0){
    const length = arr.length
    if(length === n){
        console.log(arr.join(' '))
        return
    }

    for(let i =n;i<length;++i){
        if(check(arr,n,i)){
            swap(arr,n,i)
            perm(arr,n+1)
            swap(arr,n,i)
        }
    }
}

perm(['a','b','c'],0)
console.log('*************')
perm(["a","b","b"],0)

