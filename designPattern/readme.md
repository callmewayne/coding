#### SOLID设计模式五个基本原则

- 单一封闭原则
- 开放封闭原则
- 里式替换原则
- 接口隔离原则
- 依赖反转原则

#### 构造器
构造函数就是一个构造器，可以重复使用创建对象。
```
function User(name,age,career){
    this.name = name
    this.age = age
    this.career = career
}
const  user = new User(name,age,career)
```
#### 简单工厂模式
现在我们把相同的逻辑封装回User类里，然后把这个承载了共性的 User 类和个性化的逻辑判断写入同一个函数：
工厂模式其实就是将创建对象的过程单独封装
```
function User(name,age,career,work){
    this.name = name
    this.age = age
    this.career = career
    this.work = work
}

function Factory(name,age,career){
    let work
    switch(career){
         case 'coder':
            work =  ['写代码','写系分', '修Bug'] 
            break
         case 'product manager':
            work = ['订会议室', '写PRD', '催更']
            break
         case 'boss':
            work = ['喝茶', '看报', '见客户']
    }
    return new User(name,age,career,work)
}
```

##### 抽象工厂模式里要有四种关键角色
 - 抽象工厂 抽象类，他不能被用于生成具体实例。

 - 具体工厂 用于生成产品族里一个具体的产品。

 - 抽象产品 抽象类，他不能被用于生成具体实例

 - 具体产品 用于生成产品族里一个具体的产品所依赖的更细粒度的产品

#### 单例模式

保证一个类仅有一个实例，并提供一个访问它的全局的访问点，这样的模式就叫做单例模式。

```
class SingleDog{
    show(){
        console.log('我是一个单例对象')
    }

    static getInstance(){
        //判断是否已经new过一个实例
        if(!SingleDog.instance){
            //若这个实例不存在，那么先创建它
            SingleDog.instance = new SingleDog()
        }

        //如果这个唯一的实例已经存在，则直接返回
    }
}

const s1 = SingleDog.getInstance()

```


