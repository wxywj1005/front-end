## curry

- 返回一个函数，函数可以多次接收参数
- fn.length 可以获取 targetFn 的调用需要参数个数
- 参数不够则通过 bind 保存此次参数，参数够则执行函数

```js
function curry(fn) {
  function curryedFn(...args) {
    return args.length < fn.length
      ? fn.apply(null, args)
      : curryedFn.bind(this, ...args);
  }

  return curryedFn;
}
```
