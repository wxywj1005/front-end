## lexicalScope、context、closure

### lexical scope

- **静态**，在**声明 a**的时候，在 a 对象上会自动创建一个 scope 内部变量， \[[scope]]
- scope 包含函数内部有权访问的所有变量名、函数名的集合(变量提升的那部分？)和一个 uppperscope 指针(未经过底层考究)构成 scope chain

```js
function a() {}

// a.[[scope]]
{
  set, upperScope;
}
```

### context

初始化代码时创建全局上下文，**执行函数时**创建执行上下文,执行上下文包含三个部分

- 变量对象： 变量、函数声明、函数参数(arguments)
- 作用域链：\[[scope]]->\[[upperScope]]....（从 function 对象上 copy 过来的？）
- this

```js
    //当前context
    {
        {
            variables,
            functions,
            arguments
        },
        [[scope]],
        this
    }
```

//TODO closure

### closure

### refs
