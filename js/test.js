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

 for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
 