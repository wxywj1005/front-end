##hooks

- 只能在 react scope 中执行

### dispatcher

- shared object that contains the hook functions
- dynamically allocated or cleaned up based on the rendering phase of ReactDOM
- done performing the rendering work and nullify the dispatcher and that preventing hooks from being accidentally used outside
- Hooks can only be called inside the body of a function component

### invoke

- before each and every function Component invocation, a function named prepareHooks() is gonna be called

```js
function renderRoot() {
  currentDispatcher = enableHooks
    ? dispatcherWithHooks
    : dispatcherWithoutHooks;
  performWork();
  currentDispatcher = null;
}
```

### other

- hooks 必须在第一层是为了保证 order，hooks 调用顺序是按第一次 render 的时候生成的 linkqueue 来执行的。reducer?

## hooks

### why

- 解决 mixin、hoc、renderprops 的一些问题
- 自带状态逻辑的抽象能力，以简单的方式代替复杂的生命周期

### dispatcher

- render 结束时，currentDispatcher = null

### hooks queue

#### hook schema

```js
export type Hook = {
  memoizedState: any,

  baseState: any,
  baseUpdate: Update<any> | null,
  queue: UpdateQueue<any> | null, //A queue of dispatched actions, waiting to go through the reducer.

  next: Hook | null
};
```

#### hook state VS compolent state

##### hooks--link queue(per state per node)

```js
{
  memoizedState: 'foo',
  // ...,
  next: {
    memoizedState: 'bar',
    // ...,
    next: {
      memoizedState: 'bar',
      // ...,
      next: null
    }
  }
}
```

###### compolent:

```js
{
  foo: 'foo',
  bar: 'bar',
  baz: 'baz',
}
```

### hooks 的缺点

handler

### references

[Under the hood of React’s hooks system](https://medium.com/the-guild/under-the-hood-of-reacts-hooks-system-eb59638c9dba)
