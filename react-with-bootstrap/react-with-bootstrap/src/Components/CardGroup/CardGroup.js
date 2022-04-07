import React from 'react';
import Card from '../Card/Card';
const products = [
    {id: 1 , name : 'laptop', price:1231},
    {id: 2 , name : 'laptop pro', price:1231244},
    {id: 2 , name : 'laptop pro max', price:11414231}
]
const CardGroup = () => {
    return (
        <div>
            <h2>This is my cards</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    products.map(product=> <Card product={product}></Card>)
                }
        </div>
        </div>
    );
};

export default CardGroup;