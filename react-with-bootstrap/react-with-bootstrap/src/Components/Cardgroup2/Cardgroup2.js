import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const Cardgroup2 = () => {
    const products = [
        {id: 1 , name : 'laptop', price:1231},
        {id: 2 , name : 'laptop pro', price:1231244},
        {id: 2 , name : 'laptop pro max', price:11414231}
    ]
    return (
        <div>
            <CardGroup>
                {
                    products.map(product =><Card2
                        key={product.id}
                        product={product}
                    ></Card2>)
                }
            </CardGroup>
        </div>
    );
};

export default Cardgroup2;