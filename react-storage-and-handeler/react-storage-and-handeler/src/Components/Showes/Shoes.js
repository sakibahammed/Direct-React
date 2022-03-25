import React from 'react';
import {multiply , add } from '../../Utilities/calculate';

const Shoes = () => {

    const first = 11;
    const second = 12;
    const sum = add(first , second)
    // const result = multiply(first , second) 
    const result = multiply(first , second)
    return (
        <div>
            <h1>this is shoes components</h1>
            <p>number of result = {result} and total is : {sum}</p>
        </div>
    );
};

export default Shoes;