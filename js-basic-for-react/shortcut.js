// shortcut

/*

 ==================== > falsy : < =================

empty string ==> ' ' 

zero ( 0 )

false 

null

udefined


 ====================== > truthy < =================

 string  : 'almasa'

 number : 5 

 true ,

 empty object ; { }

 empty array : [  ]



*/


let myVar = 5;
//check any truthy
if(myVar){
    myVar = myVar*100;
}
else{
    myVar = 0
}



let myMoney = 50 ;

if(!myMoney){

}


const money = 80;
let food;
if(money > 100){
    food = 'biriani'
}
else{
    food = 'caa biscuit khabo'
}




//ternary operator 

let food1 = money>100 ? 'biriani' : 'chaa biscuit';
console.log(food1)


let drink = (money  > 100 && myVar > 100) ? 'coke' : 'filter pani';
console.log(drink)

//toSting ; == (number to string)

const num1 = 52;

const numStr = num1 + '';



//string to number ;

const input = '560';
const inputNum = +input;
console.log(inputNum); // note string k number e turn korar jnne just number er aage ekta ( + ) sign use korte hoi...


//

const isActive = false;
const showUser = () =>{
    console.log('display user');

}


const hideUser = () => console.log('hide user');

// isActive ? showUser() : hideUser();


//use && if the left side is tru than the right side will be executed... 
isActive && showUser();


//use || ; use or ( if the left side is false than the right side will be executed)

//toggole boolean

isActive = !isActive;