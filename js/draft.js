Function.prototype.bind = function(fn, context, ...args) {
  const self = this;

  return function() {
    const allArgs = [...args, ...arguments];
    fn.apply(this instanceof self ? this : context, allArgs);
  };
};

function a() {
  var c = 1;
  function b() {}
}
