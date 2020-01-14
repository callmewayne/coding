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


