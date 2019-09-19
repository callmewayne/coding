//22. 有效括号
//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
const isValid = (s)=>{
    var map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    let leftArr = []
    for(var ch of s){
        if(ch in map){
            leftArr.push(ch)
        }else{
            if(ch !=map[leftArr.pop()]) return false
        }
    }
    return !leftArr.length
}

//155.最小栈
// 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) -- 将元素 x 推入栈中。
// pop() -- 删除栈顶的元素。
// top() -- 获取栈顶元素。
// getMin() -- 检索栈中的最小元素。

function MinStack(){
    this.count = 0;
    this.items = {}
}
MinStack.prototype.push = function(s){
    this.items[this.count] = s
    this.count++
}

MinStack.prototype.pop = function() {
    delete this.items[this.count]
    this.count--
};

MinStack.prototype.top = function() {
    return this.items[this.count]
};

MinStack.prototype.getMin = function() {
    if(this.count==0) return undefined
    let min = this.items[0]
    for (const i in items) {

        if(item[i] < min){
            min = item[i]
        }
        
    }
    return min
};

//数组方法实现最小栈

function MinStackByArray(){
    this.items = []
    this.min = Infinity;
    return this
}

MinStackByArray.prototype.push = function(x) {
    this.items.push(x)
    if(x<this.min)this.min=x
};

MinStackByArray.prototype.pop = function() {
    if(this.items.length){
        let s = this.items.pop()
       
        if(this.min==s)this.min=Math.min(...this.items)
    }else return undefined
};
MinStackByArray.prototype.top = function() {
    return this.items[this.items.length-1]
};

MinStackByArray.prototype.getMin = function() {
     return this.min
};

//下一个更大的数
// 给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。

// nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出-1。

// 示例 1:
// 输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
// 输出: [-1,3,-1]
// var nextGreaterElement = function(nums1, nums2) {
//     let result = []
//     for(let i = 0;i<nums1.length;i++){
//         let max 
//         for(let j = i;j<nums2.length;j++){
//             max = nums1[i]
//            if(nums2[j]>max){
//                max = nums2[j]
//                break
//            }
//         }
//         if(max > nums1[i] ){
//             result.push(max)
//         }else{
//             result.push(-1)
          
//         }
      
//     }
//     return result
  
// };

var nextGreaterElement = function (nums1, nums2) {
    return nums1.map(cur => {
        let t = nums2.indexOf(cur) //获取nums1中的当前值（cur）在nums2中位置
        for (t, len = nums2.length; t < len; t++){ //循环nums2，从t位置开始
            if (nums2[t] > cur){ //如果t位置 右侧有比cur大的值  就返回；如果此for循环完之后没有发现比cur更大的值，则返回-1
                return nums2[t]
            }
        }
        return -1
    })
};


var backspaceCompare = function(S, T) {
   
    let s = converter(S)
    let t =  converter(T)
    return s === t
};

function converter(str){
    str = str.split('')
    let arr = []
    str.forEach(item => {
     
        if(item!='#'){
            arr.push(item)
             
        }else{
            if(arr.length!=0){
                arr.pop()
            }
        }
    });    
    return arr.join('')
}




