import React from 'react';
import { add } from '../../Utilities/calculate';

// ./ na thaaka maane holo node theke import kortece
const Cosmetic = () => {
    const first = 55;
    const second = 65;
   
    const total = add(first + second);
    
    return (
        <div>
            <p>Total : {total}</p>
   
        </div>
    );
};

export default Cosmetic;