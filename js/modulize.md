## modulize

### Commonjs

sync 普通的实现

#### require 做的事情

- cache
- wrapper

```js
(function(otherModule) {
  const a = 1;

  return {
    getA() {
      return a;
    },
    ...otherModule
  };
})(otherModule);
```

### AMD

async 同时加载多个模块，promise all 之后执行 callback， requirejs

### CMD

有些模块不一定被使用，应该延迟到使用时加载

### ES6MODULE
