//创建列表类
function ArrayList(){
    //属性
    this.array = []
   
    //将数组可以插入到数组中方法
    ArrayList.prototype.insert = function(item){
        this.array.push(item)
    }
    //tostring
    ArrayList.prototype.toString = function(){
        return this.array.join('-')
    }
  //交换两个位置的数据
  ArrayList.prototype.swap = function(m,n){
      var temp = this.array[m]
      this.array[m] = this.array[n]
      this.array[n] = temp
  }
    //实现排序算法

  
    //冒泡排序
    ArrayList.prototype.bubbleSort = function(){
        //获取数组的长度
        var length = this.array.length
        //最后一次进来 i= length -2 和length-1的数据进行比较 

        //第一次 ： j = length - 1,比较倒数第一个位置
        //第二次： j = length - 2 ,比较倒数第二个位置

        for(var j = length -1 ;j >=0;j--){
            //第一次进来 i=0，比较0和1的位置的两个数据，如果0位置大于1位置的数据
            for(let i = 0;i<j;i++){
                if(this.array[i] > this.array[i+1]){
                    this.swap(i,i+1)
                }
            }
        }
       
    }

    //选择排序
}