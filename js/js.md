## 拷贝

### 深拷贝

#### JSON 转换

JSON.parse(JSON.stringify(obj))有三个问题

- 循环引用的对象转 string 会报错
- 特殊对象类型。如 funtion reg Date 不能复制过去
- Symbol 也不能被复制
- 对象中多个属性指向一个引用，引用会被复制多次

#### 递归

- 解决循环引用问题，对有引用的对象，用数组把引用存起来，每次遇到新对象的时候遍历数组看有无重复；或者 hash 引用内容，存到 map。 网上普遍将 key 存 map 的方法是不对的，因为 1. 需要防止重复的对象是引用内容，不是 key 2. 当对象嵌套多级，不同级有相同 key 的时候会出错 3. 无法解决对象中多个 key 指向同一引用的 case
- 解决不同类型问题。(除了 typeof null === "object"，其他 5 种基本类型可以直接判断)
- 其他类型针对不同类型自行处理

- array 判断 Oject.isArray() or

```javascript
    if(typeof obj[key] !== "object"){
        newObj[key] = object[key]
    }else{
        if(typeof obj[key] === null) obj[key] = null
        else{
            Object.prototype.toString.call()
            undefined=> "[object Undefined]"
            null=> "[object Null]"
            funciton=>"[object Function]"
            []=> "[object Array]"
            Date=> "[object Date]"
            /a/=> "[object RegExp]"
            {}=>"[object Object]"

            switch(Object.prototype.toString.call(obj[key])){
                var Constructor = object[key]

                func=>
                不太清楚，用bind是可行的，虽然当箭头函数的时候不会改变this。用eval箭头函数不行，正派实现应该是好像用buffer

                array=> [...obj[key]]

                /a/||date => new Constructor(obj[key])

                {}=>  newObj[key] = {}; recursion(newObj[key], obj[key])

                .......
            }
        }
    }
```

#### 遍历 key 的几种方法

- Object.keys() 仅仅返回自身的可枚举属性，不包括继承来的，更不包括 Symbol 属性
- Object.getOwnPropertyNames() 返回自身的可枚举和不可枚举属性。但是不包括 Symbol 属性
- Object.getOwnPropertySymbols() 返回自身的 Symol 属性
- for...in 可以遍历对象的自身的和继承的可枚举属性，不包含 Symbol 属性
- Reflect.ownkeys() 返回对象自身的所有属性，不管是否可枚举，也不管是否是 Symbol。注意不包括继承的属性

#### object.assign

浅拷贝，包括 symbol

```js
```
