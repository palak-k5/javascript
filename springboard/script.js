// let decision = confirm("Shall we proceed?");

let num1 = 20;
let num2 = "20";

console.log(num1==num2);
console.log(num1===num2);
function executeMe(){

    console.log("Function says hello!")
    
    }
    let timerId= setTimeout(executeMe, 3000);
        
    clearTimeout(timerId);
    setTimeout(executeMe, 3000);
    function executeMe(){

        console.log("Function says hello!")
        
        }
        var firstName;
console.log("First name: "+firstName); // First name: undefined
firstName ="Mark";
let addValues = (a=30,b) => a+b;
console.log(addValues(35));

