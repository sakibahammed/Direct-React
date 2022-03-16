/* 

1)    json e sikhar jinis holo JSON.Stringfy ,,, JSON.parse


1 .. JSON stringify.. normal javascript object k string e turn kore.

2 .. stringify k object e turn korar jnne parse korte hoi.


2) fetch ==> 






*/



//json 

const student = {
    name : 'sakib khan',
    age : 23,
    movies : ['king khan','dhakar mastan']
};

//json stringify ==> javascript object to string

const studentJson = JSON.stringify(student);
// console.log(studentJson)
// console.log(student)


// stringify k javascript object e turn korar jnne parse kora hoi


const studentObject = JSON.parse(studentJson);
console.log(studentObject);



//fetch 

fetch('url')
.then(res => res.json())
.then(data => console.log(data)) // data could be in array or object


// object keys and values 

const keys = Object.keys(student);
const values = object.values(student);


// object e loop chalate
 
//for of on array like object
// for in on object
//looop on an object using for in



//for

const number = [23,13,52,62,62,314,4];
number.forEach(num => num.console.log(num));

// return pawar jnne 

number.map(num => num*2);








// add or remove from an array ;

const products = [
    {
        name : 'Laptop',
        price : 32000,
        brand : 'lenovo',
        color : 'silver'
    },
    {
        name : 'phone',
        price : 70000,
        brand : 'apple',
        color : 'golden'
    },
    {
        name : 'watch',
        price : 320,
        brand : 'casio',
        color : 'white'
    },
    {
        name : 'sunGlass',
        price : 300,
        brand : 'rayBan',
        color : 'black'
    },
    {
        name : 'camera',
        price : 30000,
        brand : 'canon',
        color : 'gray'
    }
];

const newProduct = {name : 'webcam',
price : 700 , brand: 'lal'};

// copy products array than add new product ... 

const newProducts = [...products,newProduct];

//create a new array without one sepcific item

//remove phones means create a new array without the phones


const remaining = products.filter(product => product.name!='phone');