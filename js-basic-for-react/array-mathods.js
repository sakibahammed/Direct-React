/*                   Array Map ForEach

map :==> Map holo kono ekta jinis onusaare tarpor sei jinis gulo jeta k select korbo oi ta k loop chalai pathabe... 

Note : ==> map proti ta item e loop through kore and return kore..



forEach ==> proti ta element e loop chalaabe but return korbe na..



filter ===> kono ekta sorto dibo..oi sorto jara jara full fill korbe taader k return korbe...filter ekta array return korbe


find ==> find holo jeta match korbe taar prothom ta return kore debe.... 





*/






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
]



// const  brands = products.map(product => product.brand);

// const color = products.map(product => product.color);
// console.log(color);

// const name = products.map(product=>product.name);
// console.log(name);


// const price = products.map(price => price.price);
// console.log(price);

// const product = products.map(name => name.brand);
// console.log(product)



// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.price));



// mulitline forEach


products.forEach(product =>{
    //multiline
})


//filter


const cheap = products.filter(product => product.price<5000);
// console.log(cheap);


const medium  = products.filter(product => product.price < 30000);
// console.log(medium);

const black = products.filter(product => product.color=='black');
// console.log(black);

// filter containing n ; 

const specificName = products.filter(product => product.name.includes('p')); // Note : kothao kono kichu ache kina taa check korar jnne includes use kora hoi..

// console.log(specificName);


const specificNamE = products.filter(product => product.brand.includes('a'));
// console.log(specificNamE);



// find

const special = products.find(product =>product.name.includes('n'));
console.log(special)