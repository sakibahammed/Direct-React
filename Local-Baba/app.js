// const fruits = [{
//     name : 'pine-apple'
// },{
//     name : 'mango'
// },{
//     name : 'papaya'
// }];

// const nayoksElection = ['rajjak','alamgir' , 'jayed khan','jayed','jayed','nipun','jayed '];

// //best practice : 

// const elec = {
//     rajjak : 1,
//     alamgir :1,
//     jashim:1,
//     jayed:4
// }


const db={};
const addToDb = item =>{

    //to add data in database : 
    
    //three ways to add a property to an object

    // db.alaom = 1; //  ===> System 1
    // db['alam'] = 1;
    // db[item] = 1;
    // console.log(db);

    const storeTraker = localStorage.getItem('cheka-tracker');

    if(storeTraker){
        console.log(typeof storeTraker)
        db = JSON.parse(storeTraker);
    }

    if(item in db){
        db[item] = db[item] + 1;
    }
    else{
        db[item] = 1;
    }
    console.log(db);

    localStorage.setItem('cheka-tracker',JSON.stringify(db))
}

const removeItem = item =>{
    const storedTracker = localStorage.getItem('checka-tracker');
    if(storedTracker){
        const storeObject = JSON.parse(storedTracker);
        delete storeObject[item];
        localStorage.setItem('checkaTracker' , JSON.stringify(storeObject));
    }
}