//创建列表类
function ArrayList() {
    //属性
    this.array = []

    //将数组可以插入到数组中方法
    ArrayList.prototype.insert = function (item) {
        this.array.push(item)
    }
    //tostring
    ArrayList.prototype.toString = function () {
        return this.array.join('-')
    }
    //交换两个位置的数据
    ArrayList.prototype.swap = function (m, n) {
        var temp = this.array[m]
        this.array[m] = this.array[n]
        this.array[n] = temp
    }
    //实现排序算法


    //冒泡排序
    ArrayList.prototype.bubbleSort = function () {
        //获取数组的长度
        var length = this.array.length
        //最后一次进来 i= length -2 和length-1的数据进行比较 

        //第一次 ： j = length - 1,比较倒数第一个位置
        //第二次： j = length - 2 ,比较倒数第二个位置

        for (var j = length - 1; j >= 0; j--) {
            //第一次进来 i=0，比较0和1的位置的两个数据，如果0位置大于1位置的数据
            for (let i = 0; i < j; i++) {
                if (this.array[i] > this.array[i + 1]) {
                    this.swap(i, i + 1)
                }
            }
        }

    }
    //冒泡排序ES6写法
    ArrayList.prototype.bubbleSortByES6 = function(){
        var length = this.array.length
        for(let j = length-1;j>=0;j--){
           for(let i = 0;i<j;i++){
               if(this.array[i] > this.array[i+1]){
                [this.array[i],this.array[i+1]] = [this.array[i+1],this.array[i]]
               }
           }
        }
    }

    //选择排序
    ArrayList.prototype.selectionSort = function () {
        //1. 获取数组长度
        var length = this.array.length

        //2.外层循环：从0开始取数据
        for (var j = 0; j < length - 1; j++) {
            var min = j
            //内层循环：从i+1位置进行比较，和后面的数据进行比较
            for (var i = min + 1; i < length; i++) {
                //如果i位置的数据大于j位置的数据，那么记录最小的位置
                if (this.array[min] > this.array[i]) {
                    min = i
                }
            }
            //交换min和i位置的数据
            this.swap(min, j)
        }

    }

    //插入排序
    //先提取出第二位元素与前序元素作比较，如果比第二位元素小，则先序元素向后移动
    ArrayList.prototype.insertionSort = function(){
        //获取数据长度

        var length = this.array.length

        //外层循环:从第一个位置开始获取数据，向前面局部数据有序进行插入
        for(var i = 1;i<length;i++){
            var temp = this.array[i]
            var j = i
            while(this.array[j - 1] > temp && j>0){
                this.array[j] = this.array[j-1]
                j--
            }
            this.array[j] = temp
        }


    }

    //希尔排序
    ArrayList.prototype.shellSort = function(){
        //1.获取数组长度
          var length = this.array.length
        //2.初始化的增量（gap -> 间隔/间隙）

        var gap = Math.floor(length / 2)

        //3.while循环（gap不断的减小）
        while(gap >= 1){
          //4.以gap为间隔，进行分组，对分组进行插入排序
          for(var i = gap;i<length;i++){
              var temp = this.array[i]
              var j = i
              while(this.array[j-gap] > temp && j> gap -1){
                  this.array[j] = this.array[j - gap]
                  j -= gap
              }
              //5.将j位置的元素复制temp
              this.array[j] = temp
          }
          
          gap = Math.floor(gap / 2)
        }

    }

    //快速排序
    //1.选择枢纽
    ArrayList.prototype.median = function (left ,right){
        //1.取出中间的位置

        var center = Math.floor((left + right) / 2)

        //判断大小
        if(this.array[left] > this.array[center]){
            this.swap(left,center)
        }

        if(this.array[center] > this.array[right]){
            this.swap(center,right)
        }
        if(this.array[left] > this.array[right]){
            this.swap(left,right)
        }

        //将center换到right - 1的位置
        this.swap(center,right-1)
        return this.array[right -1]
    }

    //快速排序的实现
    ArrayList.prototype.quickSort = function(){
        this.quick(0,this.array.length -1)
    }
    

    ArrayList.prototype.quick = function(left,right){
       //结束条件
       if(left >= right) return

       //获取枢纽
       var pivot = this.median(left,right)

       //3.定义变量，用于记录当前找到的位置
       var i = left
       var j = right - 1

       //4.开始交换
       while(true){
            while(this.array[++i] < pivot){}
            while(this.array[--j] > pivot){}
            if( i <= j){
                this.swap(i,j)
            }else{
                break
            }
       }

       //6.将枢纽放置在正确的位置，i的位置
       this.swap(i,right - 1)

       //7.分而治之
       this.quick(left,i - 1)
       this.quick(i + 1,right)
    }
    

}