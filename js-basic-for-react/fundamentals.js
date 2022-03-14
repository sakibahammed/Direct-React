/* 1 .  How to declare a variable using let and const




2 . 6 basic Condition  > , < , === , !== , <== , >==
  multiple condition : && ==> duitay sottti hoite hbe and 
  || ekta sotti hoileo hobe

3 . Array declare , index , length ,push ,pop index[set]



4. loop : for loop


5 . function 

6 . object , access property by name

3 ways to access property

 */
  const fathersName = 'arnolds';
  let season = 'summar';

if(fathersName === 'Arnold'|| season=='raining '){
    console.log()
}

else if(fathersName === 'Arnolds'){

}

else{

}


const number = [34,3,13,67];

for(let i = 0;i<number.length;i++){
    const numeber = number[i];
}
number[0] = 2323; 


function multiply(number1 , number2){
    const  result = number1 + number2;
    return  result;
}


const outPut = multiply(1,24);
console.log(outPut);



const student = {
    name : 'sakib khan',
    age : 23,
    movies : ['king khan','dhakar mastan']
};

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string

const myvariable = 'age';
console.log(student[myvariable]); // access by property name in a variable

