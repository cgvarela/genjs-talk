var nat = function*() {
  var i = 0;
  while(true) {
    yield ++i;
  }
};

var map = function* (fn, genFn) {
  var genObj = genFn();
  var current = genObj.next();

  while(!current.done) {
    yield fn(current.value);
    current = genObj.next();
  }

  return fn(current.value);
};

var double = function(x) { return 2*x; }
var even = map(double, nat);

console.log(even.next());
console.log(even.next());