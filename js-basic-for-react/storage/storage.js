/* 

    set items : to set something in local storage
    get items : to get something from local storage

    local storage e array or object set kora jaai na.. array or object k local storage e set korar jnne json use kore stringify kore rakhte hoi


    eg : 
    
    localStorage.setItem('friends', JSON.stringify([34,13,56]))



    another note : local storage and session storage same e jinins and tara single value store kore eijnne object or array storage e rakhar aage obossoi  json stringify kore nete hobe and use korar somoi parse kore nete hobe



*/






// localStorage.setItem('userId',87952214)




const addToLocalStorage = ()=>{
    const idInput = document.getElementById('storage-id')
    const id = idInput.value;

    const valueInput = document.getElementById('value-id');
    const value = valueInput.value;

    //setting in local storage ;
    if(id && value){
        localStorage.setItem(id, value);
    }
    
    idInput.value = '';
    valueInput.value = '';
}