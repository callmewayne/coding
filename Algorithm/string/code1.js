//空字符串替换
//实现一个函数，把字符串中的每个空格替换成“%20”
//输入“wa are happy”

function replaceEmpty1(str){
    const re = / /g
    return str.replace(re,'%20')
}

function replaceEmpty2(str){
    str = str.split('')

    var count= 0,
    i=0,
    j=0
    for(let i = 0;i<str.length;i++){
        str[i]===" " && ++count
    }
    //
   //每个替换的字符串长度要比原来多2
   let length = str.length + count * 2
   let result = new Array(length)

   while(i<result.length){
       if(str[j]==" "){
        result[i++]='%'
        result[i++]='2'
        result[i++]='0'
        j++
       }else{
        result[i++]= str[j++]
       }
   }
    return result.join("")
}

console.log(replaceEmpty1('wa are happy'))
console.log(replaceEmpty2('wa are happy'))