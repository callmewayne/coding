var regex1 = /ab{2,5}c/g
var string1 = 'abc abbc abbbc abbbbc abbbbbbbc'
console.log(string1.match(regex1))

var regex2 = /a[123]b/g
var string2 = 'a0b a1b a2b a5b'
console.log(string2.match(regex2))

//贪婪匹配和惰性匹配
//表示数字组合连续出现2-5次

//贪婪匹配
var regex3 = /\d{2,5}/g
var  string3 = '123 1234 12345 123456'
console.log(string3.match(regex3))

//惰性匹配
var regex4 = /\d{2,5}?/g
var string4 = '123 1234 12345 123456'
console.log(string4.match(regex4))

//多选分支
//一个模式可以实现横向和纵向模糊匹配，而多选分支可以支持多个子模式任选其一
var regex5 = /good | nice/g
var string5 = 'good idea , nice try'
console.log(string5.match(regex5))

//匹配16进制字符串
var regex6 = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g
var string6 = '#ffbbad #Fc01DF #FF #ffE'
console.log(string6.match(regex6))

//匹配24小时
var regex7 = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/
console.log(regex7.test('23:59'))
console.log(regex7.test('02:07'))

//匹配日期
//yyyy-mm-dd格式为例
//年四位数字，可以用[0-9]{4}
//月，共12月，分两种情况，首字母0和首字母为1 ，可用(0[1-9] | 1[0-2])
//日，最大31天，可以用(0[1-9] | [12][0-9]|3[01])

var regex8 = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
console.log(regex8.test('2019-09-12'))

//window操作系统文件路径
//分析：整体模式是：盘符：\文件夹\文件夹\文件夹\
//其中匹配F：\.需要使用[a-zA-Z]:\\,其中盘符不区分大小写，\字符需要转义
//文件名或者文件夹名，不能包含一些特殊字符，此时我们需要排除字符组[^\\:*<> | "?\r\n/]

var regex9 = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
             
console.log(regex9.test('C:\\Users\\wayne\\Documents\\WeChat Files\\callmewayneplz\\FileStorage\\File\\2020-01'))

//匹配Id
//要求从<div id="container" class="main"></div>匹配出id

var regex10 = /id="[^"]*"/g
var string10 =  '<div id="container" class="main"></div>'
console.log(string10.match(regex10))

//匹配位置、
var result1 = "hello".replace(/^|$/g,'#')
console.log(result1)

//多行匹配模式，二者是行的概念
//m是多行
var result2 = "I\nlove\njavascript".replace(/^|$/gm,'#')
console.log(result2)

//\b和\B，\b是单词边界，具体就是\w和\W之间的位置，也包括\w和\w和^之间的位置

var result3 = "[JS] Lesson_01.mp4".replace(/\b/g,'#')
console.log(result3)

var result4 =  "[JS] Lesson_01.mp4".replace(/\B/g,'#')
console.log(result4)

//(?=p)和(?!p)
//正向先行断言和负向先行断言。
//(?=p),其中p是一个子模式，即P前面的位置
//(?=l),表示字符前面的位置，例如：
var result5 = "hello".replace(/(?=l)/g,'#')
console.log(result5)
//he#l#lo

//而(?!p)就是(?=p)的反面意思
var result6 = 'hello'.replace(/(?!l)/g,'#')
console.log(result6)
//#h#ell#o#

var result7 = '12345678'.replace(/(?=\d{3}$)/g,',')
console.log(result7)

var result8 = '123456789'.replace(/(?!^)(?=(\d{3})+$)/g,',')
console.log(result8)

var result9 = '123456789 1234356789'.replace(/(?!\b)(?=(\d{3})+\b)/g,',')
console.log(result9)

//验证密码的问题，密码长度由6-12位，由数字、小写字符和大写字母组成，但至少包括2种字符。
var reg = /^[0-9a-z-A-Z]{6,12}$/g

//判断是否包含某一种字符
//假设要求必须包含数字
var reg = /(?=.*[0-9])^[0-9a-zA-Z]{6,12}$/

//同时要求包含两种具体字符
var reg = /(?=.*[0-9])(?=.*[a-z])/

var reg = /(?=.*[0-9])(?=.*[a-z])^[0-9a-zA-Z]{6,12}$/


var maxRegex = /(?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])^[0-9a-zA-Z]{6,12}$/g
var string11 = 'ASDASFAF1'
console.log(maxRegex.test(string11))



//将每个单词的首字母转换为大写
function titleize(str){
    return str.toLowerCase().replace(/(?:^|\s)\w/g,function(c){
        console.log(c)
        return c.toUpperCase()
    })
}

console.log(titleize('my name is epeli'))

//驼峰化
function cameliaze(str){
    return str.replace(/[-_\s]+(.)?/g,function(match,c){
        return c?c.toUpperCase():''
    })
}

console.log(cameliaze('-moz-transform'))

//中划线化
function dasherize(str){
   //第一段将匹配出来的大写字符前面加‘-’，
    return str.replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,'-').toLowerCase()

}
console.log(dasherize("MozTransform"))

//html转义和反转义
function escapeHTML(str){
    var escapeChars = {
        '¢' : 'cent',
	  '£' : 'pound',
	  '¥' : 'yen',
	  '€': 'euro',
	  '©' :'copy',
	  '®' : 'reg',
	  '<' : 'lt',
	  '>' : 'gt',
	  '"' : 'quot',
	  '&' : 'amp',
	  '\'' : '#39'

    }
    return str.replace(new RegExp('['+Object.keys(escapeChars).join('')+']','g'),function(match){
         return '&'+escapeChars[match]+';'
    })
}
console.log(escapeHTML('<div>Blah blah blah</div>'))

//匹配成对标签
//要求匹配<title>regular expression</title>
var regex13 = /<([^>]+)>[\d\D]*<\/\1>/
var string13 = '<title>regular sdad</p>'

console.log(regex13.test(string13))

//惰性两次
//惰性量词就是在贪婪量词后面加个问号。表示尽可能少的匹配

var regex14 = /(\d{1,3}?)(\d{1,3})/
var string14 = '12345'
console.log(string14.match(regex14))


