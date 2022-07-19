//! ===  question 18

/* 
* Which code will return undefined after the followig JavaScript decloration


*/

var obj = {
  a: 1,
  b: { c: 2 },
};
console.log(obj.c);
console.log(obj?.a?.b?.c?.d);