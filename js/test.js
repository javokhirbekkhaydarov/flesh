
//! ===  question 55

/* 
*What is the output of the following JavaScript code?
let obj = {
  x: 2,
};

let add = function (a, b, c) {
  return this.x + a + b + c;
};

let arr = [3, 4, 5];
let bound = add.bind(obj);
console.log(add.call(obj, 3, 4, 5));
console.log(add.apply(obj, arr));
console.log(bound(3, 4, 5));

?14,14,14

*/

let obj = {
  x: 2,
};

let add = function (a, b, c) {
  return this.x + a + b + c;
};

let arr = [3, 4, 5];
let bound = add.bind(obj);
console.log(add.call(obj, 3, 4, 5));
console.log(add.apply(obj, arr));
console.log(bound(3, 4, 5));
