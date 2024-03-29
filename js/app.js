//! ======= question 1
/* 
* Which JavaScript expressions will  return NaN?

?parseint("a123") and NaN ** 2

*/
                                                                                                                                                                                            
//! =======  question 2

/* 
* What is the output of the following JavaScript code?
let number = 0
console.log(number++)
console.log(++number)
console.log(number)

? 0 , 1 , 2
*/

//! =======  question 3

/* 
 * What is the output of the following JavaScript code?
(function getValue() {
  let value;
  console.log(value);
  value = 42;
  console.log(value);
})();

? undifined  ,  42


*/

//! =======  question 4

/* 
* What method allows you to add an attribute to a DOM element?

 ?setAttribute

*/

//! =======  question 5

/*  
 * What are the ways to create an array from digis ,
 * 1,2 and 3 as strings in JavaScript?
 
 ?Array.from('123') , ["1" , "2" , "3"] , new Array("1","2","3")


*/

//! =======  question 6

/* 
* How to exit out of a loop in JavaScript?

?using break keyword!

*/

//! =======  question 7

/* 
* Which JavaScript statements will output true?

1console.log(5 + 10 * 3 === 45);
2console.log(2 ** (3 ** 2) === 512);
3console.log(5 % 1 === 0);
4console.log(8 + 8 / 2 + 2 === 10);

? (5 + 10 * 3 === 45) and (8 + 8 / 2 + 2 === 10) these statiments true
*/

//! =======  question 9

/* 
* Which method will modify the original array in JavaScript

?var a = [1, 2, 3];
?a.splice(1,2,3)
?console.log(a);

*/

//! =======  question 10

/* 
* How can you render a React element


?ReactDOM.render(
  <h1>Hello world</h1>
  ,
  document.getElementById("root")
); 
and 
? ReactDOM.render(React.createElement("h1", (), "Hello World")
document.getElementById("root")
)
*/

//! =======  question 11

/* 
* Which types of components exist in React

? Functional and Class Components

*/

//! =======  question 12

/*
 * What would the following JavaScript code return?
  console.log(typeof typeof 1);

 ?  code return string 
 */

//! ===  question 13
/*  
* How to test if a string contains a substring in JavaScript

?str includes(substr) and substr includes(str)
*/

//! ===  question 15

/* 
 *What JavaScript keyword is used to access and call functions on an object's parent

 ?super method
 */

//! ===  question 16

/*
 * How can an event handler be assigned to an element in a browser?

?use addEventListener() method and HTML event handler attribute

 */

//! ===  question 17

/* 
* How to extract "ring " part from the following JavaScript string?

?let str = "stringify" (str.slice(2,6));

*/

//! ===  question 18

/* 
* Which code will return undefined after the followig JavaScript decloration

var obj = {
  a: 1,
  b: { c: 2 },
};
?console.log(obj.c);
?console.log(obj?.a?.b?.c?.d);


*/

// while (noSucces) {
//   tryAgain();
//   if (Dead) break;
// }
//! Javohirbek

//! ===  question 19

/* 

* What syntac says that is the X class implements the Y interface in TypeScript

? X inherits Y this is approximate

*/

//! ===  question 20

/* 

* How to store data localStorage in a browser?

?localStorage.setItem("data", 42)

*/

//! ===  question 21

/* 
* Which decorators are included in Angular?

?i guess ngModule
*/

//! ===  question 22

/* 
* Which ways to create a string are valid in JavaScript

let str = "42"
let str = `42`
let str = '42'


*/

//! ===  question 23

/* 
* Which of the following quantifiers means  zero to five occurrences in regular expressions?
[0 ..5]
[0<5]
[0<5]
[0-5]

*/

//! ===  question 25
/* 
* What are the ways to acces obj's proporty named prop in JavaScript?

?bracket notation and dot notation obj["prop"] const {prop} = obj 

*/

//! ===  question 26

/* 
* Which array methods exist in JavaScript

? join , push , map 
*/

//! ===  question 27

/* 
* How can you select an existing DOM element?

?document.getElement("div") , document querySelector("p") ,  document.getElementClassName("class") ,  document.getElementByTagName("li") ,  document.getElementByid("id")

*/

//! ===  question 28

/* 
* After what  JavaScript deelaration he f() call will throw an error?

? const f = function g() {
  console.log(arguments);
};
*/

//! ===  question 29
/* 
* Which function doesn't exist in JavaScript
  

?console.error
*/

//! ===  question 30

/* 
* Which  array methods return a boolean value in JavaScript

? some every 

*/

//! ===  question 31

/*
 * Which results of the  following comparisons in JavaScript are true
 ?true false true  true true

 */

//! ===  question 32

/* 
*Which of the following is the correct syntax to create a cookie using JavaScript in a Browser?

? document.cookie = "username= Zefram Cochrane"

*/

//! ===  question 33

/* 
* What is the output of the following JavaScript code?

?1,2,3,4
*/

//! ===  question 34

/* 
* How can you configure the template of the component in Angular


 )) i dont know angular
*/

//! ===  question 35

/*
 *Which method selects the first matching element in the document

 ?querySelector

 */

//! ===  question 36

/* 
*Which React methods exist in the life-cycle

 ?ComponentDidMount  , ComponentDidUpdate

 */

//! ===  question 37

/* 
* What is the output of the following TypeScript code?

const a = 1;
const b = "1"
console.log(a==b)

? i guess true
*/

//! ===  question 38

/* 
* What method do we use to add an event listener in JavaScript being executed in a browser?

?element.addEventListener

*/

//! ===  question 39

/* 
* When will the if body be executed in JavaScript

?if (condition) {
   statement1
} else {
   statement2
}
 

*/

//! ===  question 40
/*
 * What is the output of the following JavaScript code?

let a = 3;
let b = new Number(3);

let e = 3;
console.log(a == b);
console.log(a === b);
console.log(b === e);

? true false false
 */

//! ===  question 41

/* 
* How long is the data available in localStorage in a browser?

?forever, the data doesn't get lost

*/

//! ===  question 42

/* 
 *What are correct ways to update the internal state of the component in React

?this.setState({count: this.state.count + 1}) and this.setState("count" , 2)
*/

//! ===  question 44

/* 
*What is the value of typeof undefined == typeof NULL in JavaScript?

?true

*/

//! ===  question 45

/* 
*What is the output of the following JavaScript code?

const timer = (x) => {
  return new Promise((y) => setTimeout(() => y(x), Math.random() * 100));
};
const all = Promise.all([timer(" first "), timer("second")]).then((data) =>
  console.log(data)
);
};
*/

//! ===  question 46

/*
 *Which JavaScript expressions will return true?
 console.log(`42\n`.length == 4);
 ?console.log("".length == 0); ✔
 ?console.log(`42\n`.length == 3); ✔
 console.log("string".length == undefined);
 ?console.log("string".length == 6); ✔
 console.log("".length == null);
 console.log("string".length() == 6);
 console.log("".length === 0);
 */

//! ===  question 47

/* 
* How can you read CSS  styles of a DOM element?

?getComputedStyle to get the element's styles

*/

//! ===  question 48

/*
 *What is the output of the folowing JavaScript code
 for (var i = 0; i < 5; i++) {
   setTimeout(function () {
     console.log(i);
   }, i * 1000);
 }

 ?5,5,5,5,5
 */

//! ===  question 49

/* 
* How can you render child components inside some specific part of the parent componenet in React?
?using props children

*/

//! ===  question 51

/*
 * What is the output of the following JavaScript code?

function request(name) {
  console.log("I need " + name);
}

function get(items, callback) {
  callback(items);
}
get("your clothes,  your boots and your motoreycle request");

? this code throws an error
 */

//! ===  question 53

/*
 *Which array methods return an array in JavaScript

 ?find()  and map()
 */

//! ===  question 54
/* 
*Which of the following regular  expressions matches all of these substrings

? / (a-zA-Z)+/
*/

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

//! ===  question 56

/* 
*Which ways to add a property for the existing object are correct in JavaScript

? obj.a = 1 obj[a] =1

*/

//! ===  question 57

/* 
 *What is the output of the following JavaScript code ?

 
 console.log(str);
 var str = "hi"
 
 ?undefined
 */

//! ===  question 58

/* 
*Which ways to create  a string are valid in JavaScript

? let str = 42.toString let str = '42' , let str = "42"
*/

//! ===  question 60

/* 
*What value will variable i have after the end of the loop in JavaScript
for (let i = 0; i < 10; i++) {
  console.log(i);
}

? 1,2,3,4,5,6,7,8,9

*/
