## 尾递归

参考[阮一峰尾递归](http://www.ruanyifeng.com/blog/2015/04/tail-call.html)

### 关键词

防止栈溢出

**最后一步** **只有** 函数调用 => 当前栈数据不需要了，只需要参数传给调用函数

普通递归转尾递归的思路： 将局部变量改写进函数参数

js 严格模式才开启尾递归优化，严格模式屏蔽 arguments、func.caller,不屏蔽的话栈也会因为要保存这二者不被销毁

不开严格模式的 hack 方式:[循环来执行递归](https://juejin.im/entry/5a8ebbc16fb9a063535053e5)
