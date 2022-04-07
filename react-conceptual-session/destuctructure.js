const personObject  ={
    firstName :'Mir',
    lastName : 'Hussain',
    address : {
        country : 'uganda',
        capital : 'kampala'
    }
};

const cart ={
    abc : 1,
    def : 2 ,
    ghi : 1
};

const personArray = ['Mir','hussain'];


//object dot notation and square bracket notation

//dot notation ( object access )
const firstName = personObject.firstName;
// console.log(firstName);

// square bracket notation ( object access )
const lastName = personObject['lastName']
// console.log(lastName);


// const lastName = "lastName";
// const name =personObject[lastName];
// console.log(name);



const givenQuantity = (id) =>{
    console.log(cart[id]); // square bracket use korle data k sohoj e access kora jaai
}
givenQuantity('abc')



// simple object destructuring ===> 

const personObject  ={
    firstName :'Mir',
    lastName : 'Hussain',
    address : {
        country : 'uganda',
        capital : 'kampala'
    }
};

//using destructutirng

const {firstName , lastName,address} = personObject
// console.log(address.capital);


// Array index

// array destructuring
const personArray = ['Mir','hussain','murtoza'];
const [firstName , lastName] = personArray;

console.log(lastName);


// another array destructuring

const visit = ['dhaka','chandpur','coxsbazar','kushtia','jessore'];

//lets access last element : 

const [, , , , guest] = visit;
console.log(guest)

// note :==>
// ekhane koma gulo key k access kore



//object destructuring pro tricks

//multilevel destructuring

const personObject  ={
    firstName :'Mir',
    lastName : 'Hussain',
    address : {
        country : 'uganda',
        capital : 'kampala',
        city:{
            maincity : 'dhaka',
            remotecity : 'ctg'
        }
    }
};

const {address :{capital}} = personObject
// console.log(capital)

const{address : {city:{remotecity}}} = personObject;
console.log(remotecity)


//default value during destructuring

const {age='Not Available'} = personObject;
console.log(age);















//re-assigning 

const personObject  ={
    firstName :'Mir',
    lastName : 'Hussain',
    address : {
        country : 'uganda',
        capital : 'kampala',
        city:{
            maincity : 'dhaka',
            remotecity : 'ctg'
        }
    }
};

const {firstName : bhukichuki} = personObject;
console.log(bhukichuki)











