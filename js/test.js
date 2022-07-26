//! ===  question 35

/*
 *Which method selects the first matching element in the document

 ?querySelector()

 */

let str = "22222";
let new_str = new String(str);
console.log(typeof str);
console.log(typeof new_str);

async function f() {
  return 42;
}
f().then(console.log);

const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));

const baz = () => console.log("Thirs");
bar();
foo();
baz();

let str1 = "Hello\nWorld";
let str2 = `Hello World`;
const a_1 = 0;
console.log(str1 == str2);

const json = '{"name": "Yosafbrof" , "husbands":3}';
const res = JSON.parse(json);
console.log(typeof json, typeof res, res.name, res.husbands);


let var1 = 'my str';
let var2 = var1;
var2 = 'my new str'
console.log(var1);
console.log(var2);


const a ={b:1}; a =2
console.log(a);