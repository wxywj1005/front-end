## 继承

### 原型链继承

```js
//Parent
function P(pVal) {
  this.pVal = pVal;
}

P.prototype.fn = function() {};

//Child
function C() {}

C.prototype = new P();

let c = new C();
```

#### 优点

- 即继承了 parent 的 val，又继承了 parent fn

#### 缺点

- 没有采用 call，不能往 P 的构造函数中传参
- 继承来的 val 在原型链上，会被 inst 共享
- C 的 prototype 是 P 的实例，所以 prototype 上的 constructor 是 P

### 借用构造函数

```js
function C(val) {
  P.apply(this, val);
}

let c = new C("val");
```

#### 优点

- 可以往 P 中传参
- （支持属性不共享）

#### 缺点

- 不能继承 P 原型上方法

### 组合继承

```js
function C(val) {
  Parent.call(this, val);
}

C.prototype = new P();

let c = new C("val");
```

#### 优点

- 属性和方法都继承下来了

#### 缺点

- P 构造函数调了两遍，原型上多了一份 P 中不能传参的属性
- c.prototype 的 constructor 为 P

### 寄生式继承

```js
function c(p) {
  const obj = Object.create(p);

  return obj;
}
```

实现效果和原型链继承比较相似，也是属性共享了

#### 以上这四种都是从逻辑上来讲有错误的实现方式

---

### 寄生组合式继承

```js

function C(val){
    P.call(this, val)
}

inhertPrototype(P, C)

funciton inhertPrototype(FnP, FnC) {
    const prototype = Object.create(FnP.prototype)//可以直接在此定义属性中的constructor，参照es6继承
    prototype.constructor = FnC //对象上的constructor FnC覆盖了prototype上的constructor
    FnC.prototype = prototype
}

// 创建出来的prototype
{
    constructor: FnC,
    __proto__: {
        constructor: FnP,
        ...
    }
}
```

#### 优点

一种逻辑上来讲正确了的实现方式

#### 缺点

实现上来看比较 hack

- C 构造函数外要写代码
- 使用 ownproperty 的 constructor 覆盖继承的原型的

### es6 继承

其实就是寄生组合式继承的语法糖,用 babel 转 ES5 之后

```js
// Class C extend P
C.prototype = Object.create(P.prototype, {
  constuctor: {
    value: C.prototype,
    configurable: true,
    enumerable: true,
    writable: true
  }
});

// super(val)
P.call(this, val);
```
