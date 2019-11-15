## bind

- 除了可以 bind this，还可以当做 curry collect 参数

```js
Function.prototype.bind(fn, context,...args){
    const self = this

    return funciton(){
        const allArgs = [...args, ...arguments]
        fn.apply(this instanceof self ? this : context, allArgs)
    }
}
```
