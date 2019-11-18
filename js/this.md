## this

### 常规

- window 中的 this 和对象执行的 this

### 非常规

- 构造函数的 this
- dom 的 this

### 修改 this 的方法

- 箭头函数改 改过之后就不能再被修改 箭头函数不能当做构造函数 new 会出错
- apply、call、bind 多个 bind 是没有用的(？bind 是通过 apply 实现，通过在外层包，最终执行的 apply 是内层，所以外层的改已经晚了？)
- new 是一定会把 this 指向新创建的对象的，bind 函数也需要为其让路，bind 实现 return 的 func 中判断 this instanceof function 自己，如果是的话会避让

### new 做的几件事

- 创建一个全新的对象
- 这个对象被执行 \[[Prototype]] 连接
- 将这个对象绑定到构造函数中的 this
- 如果函数没有返回其他对象，则 new 操作符调用的函数则会返回这个对象

参考： 《you don't know js》、[bind 函数实现原理](https://juejin.im/post/5b3c3377f265da0f8f20131f)
