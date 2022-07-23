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

function request(name) {
    console.log("I need " + name);
  }
  
  function get(items, callback) {
    callback(items);
  }
 console.log( get("your clothes,  your boots and your motoreycle request"));
  