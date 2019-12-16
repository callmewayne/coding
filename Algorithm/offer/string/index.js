//1.实现一个函数，把字符串中的每个空格替换成“%20” 用于字符串中字符替换
//例如输入“We are happy”,则输出“We%20are%20happy”

//思路：
//先计算替换后字符串的长度，然后逐个填写字符串，时间复杂度是0(N)

function repalceEmpty(str){
    //现将字符串转变为数组
   str= str.split('')
    let count = 0,//包含的空格数
    i= 0,//新数组添加字符串的索引，
    j=0//旧数组遍历索引
    console.log(str)
    //计算出有多少个空格
    for(let i = 0;i<str.length;++i){
        str[i] === " " && ++count;
    }
    console.log(count)
    //新数组的长度为原数组的程度加上空格数乘以2，（包含自身）
    let length = str.length + count * 2
    //为新数组赋值长度
    let result = new Array(length)
    //当小于新数组的长度时进行遍历旧数组
     while(i<result.length){
         //当字符中遇到空格时
         if(str[j] === " "){
            //新数组里添加需要替换的值，并且索引值++
            result[i++] = "%"
            result[i++] = "2"
            result[i++] = "0"
            //同时旧数组索引自加
             j++
         }else{
             //如果没有遇到空格，为新数组赋予原索引的值，并且自加
             result[i++] = str[j++]
         }
     }
     //最后将数组转化为字符串
     return result.join('')
}
console.log(repalceEmpty('We Are happy'))
