/* Key of desturcturing  : =====> daain pashe jeta rakhbo baam pasheo seta rakhte hbe... 

daaan pashe object thakle baam pasheo object hobe ... daan pashe array thakle array boshbe....

optional chaining : ===> 

optional chaining holo kono ta na thakle oita k niye kaaj kore..






*/





const numbers = [42,65];
// const x = numbers[0];
// const y = numbers[1];

// const [x ,y]  = [42,65];

const [x,y] = numbers

// console.log(x ,y);



const name = ['sakib' , 'ahammed' ,'omar','nazifa','tasnim'];

const [sakib , ahammed] = name;
// console.log(sakib , ahammed)

function getValues (num1 , num2){
    const nums = [num1 , num2];
    return nums;
}
const [first , second] = getValues(34,34)
// console.log(getValues(43,56));



const student = {
    name : 'sakib khan',
    age : 23,
    movies : ['king khan','dhakar mastan']
};


// const [firstMovie , secondMovie] = ['king khan','dhakar mastan'];
// console.log(firstMovie)

const [firstMovie] = student.movies

console.log(firstMovie);







//object destructuring 


const {name,age} = {name : 'alu' , age :14};
const {name,age} = {id:12,name : 'alu' , age :14 , salary : 3243};

const employee = {
    ide : 'vs code',
    desigation : 'developer',
    machine : 'mac',
    language : ['html','css','js'],
    specification : {
        height : 66,
        weight : 67,
        address : 'kumarkhali',
        drink : 'water',
        watch:{
            color : 'black',
            price : 500,
            brand : 'garmin'
        }
    }
}



const {machine , ide} = employee;
const {weight , address} = employee.specification;

// console.log(weight , address);

const { color }= employee?.specification?.watch;


const {brand} = employee?.mobile?.name;
console.log(brand);
















