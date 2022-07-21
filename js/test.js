//! ===  question 33

/* 
* What is the output of the following JavaScript code?

?0,1,2,3,4

*/

for(let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}

//! ===  question 34

/* 
* How can you configure the template of the component in Angular


 ))@Component({
  selector: 'app-component-overview',
})
 @Component({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html',
})
*/
