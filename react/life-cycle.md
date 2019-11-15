## life cycle

### getDerivedStateFromProps

写成 pure，隔离到组件之外。避免多次调用非幂等的 side effect 导致 component 里面被改掉。不能通过 this 访问组件

### getSnapshotBeforeUpdate

也是一样，不能更改，只能 get，在算一个值 return 出来给 didupdate 接受
