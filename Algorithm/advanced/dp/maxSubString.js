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