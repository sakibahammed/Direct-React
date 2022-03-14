/* 

1.  template string :  ` `
2.  Arrow function 
3. Spread operator






*/




let number = [34,3,13,67];




const student = {
    name : 'sakib khan',
    age : 23,
    movies : ['king khan','dhakar mastan']
};


const aboutMe = `My name is ${student.name} age of ${student.age} has numbers of ${number[2]} also liked movies ${student.movies[0]}`;
console.log(aboutMe);



// arrow funciton ;

const getFiftyFive = () => 55; // no perameter

const add65 = (number) =>{ // single perameter
 return number + 65;
}
console.log(add65(2));

const isEven = x => x %2 ==0;
console.log(isEven(2))

const addThree = (num1 , num2 , num3)=>{
    const result = num1 + num2 + num3;
    return result;
}

const addThreE = (x,y,z)=> x + y + z;

const doMath = (num1 , num2)=>{ // multiline arrow funciton
    const sum = num1 + num2
    return sum;
}





//spread operator; 

const newNumbers = number;
number.push(23);

// console.log(newNumbers);

//spreading ;;

const newNumber = [...number]
// console.log(newNumber);
// console.log(number)


// create a new array from an older array and add an element

const currentnumber = [...number , 55];
console.log(number)
console.log(currentnumber);


/*

Summary : kono ekta array theke notun ekta array banano or notun element add korte chai tbe sei khtre spread operator use korte hbe. ( ... ) and also new element e koma diye bosay dete hbe..... 


*/



//try out : 

const array = [23,12,54,78,9876];
const spreadArray = [...array];
array.push(23)
array.push(23)
array.push(23)
array.push(23)

console.log(array);
console.log(spreadArray);