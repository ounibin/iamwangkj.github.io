> 此文章以最简短的方式记录自己对call和apply，欢迎指正错误，我会及时更新理解，希望对各位的查阅有帮助

首先抛出具体代码，方便理解

```
function A(){
  this.say = function(name, age){
    console.log(name, age)
  }
}

function B(){
  this.walk = function(){
    console.log('I am walking')
  }
}

const a_ins = new A()
const b_ins = new B()

// 将a实例中的方法say，借用给b实例。call带若干个参数
a_ins.say.call(b_ins, 'wangkj', 18) // wangkj 12
// 将a实例中的方法say，借用给b实例。apply带一个参数（该参数为数组，依次带参数）
a_ins.say.apply(b_ins, ['wangkj', 18]) // wangkj 12
```

###### 相同：  
call和apply都是一个对象实例（A的实例）的方法（say）借用给另一个对象实例（B的实例），这样B（没有say方法）就可以使用到A的方法（say）  
###### 不同：  
call带若干个参数，  
apply带一个参数（该参数为数组，依次带参数，如['wangkj', 18]）