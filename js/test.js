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

const timer = (x) => {
  return new Promise((y) => setTimeout(() => y(x), Math.random() * 100));
};
const all = Promise.all([timer(" first "), timer("second")]).then((data) =>
  console.log(data)
);
//!  [ ' first ', 'second' ]