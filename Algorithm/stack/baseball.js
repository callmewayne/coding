const baseball = (arr) => {
    //用数组来实现堆栈结构

    let result = []
    let pre1,pre2
    //对数组进行遍历，处理得分
    arr.forEach(item => {
        switch (item) {
            case 'C':
                    if(result.length){
                        result.pop()
                    }
                break;
            case 'D':
                   pre1 = result.pop()
                   result.push(pre1,pre1 * 2 )
                break;
            case '+':
                      pre1 = result.pop()
                      pre2 = result.pop()
                      result.push(pre2,pre1,pre2+pre1)
                break;

            default:
                    result.push(item*1)
        }
    })

    return result.reduce((total,num)=>{
              return total + num
    })
}