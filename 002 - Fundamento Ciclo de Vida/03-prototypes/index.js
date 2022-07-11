const assert = require("assert");
const obg = {};
const arr = [];
const fn = () => {};

// proto é a referencia do objeto que possui as propriedades dele
console.log("new Object() is{}", new Object().__proto__ === {}.__proto__);
assert.deepStrictEqual(new Object().__proto__, {}.__proto__);

console.log(
  "obg.__proto__ === Object.prototype",
  obg.__proto__ === Object.prototype
);

assert.deepStrictEqual(obg.__proto__, Object.prototype);

console.log(
  "arr.__proto__ === Array.prototype",
  arr.__proto__ === Array.prototype
);

assert.deepStrictEqual(arr.__proto__, Array.prototype);

console.log(
  "fn.__proto__ === Function.prototype",
  fn.__proto__ === Function.prototype
);

assert.deepStrictEqual(fn.__proto__, Function.prototype);
