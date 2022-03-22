import React from 'react';
import './Country.css'
const Country = (props) => {
    const {area , region,name,flags} = props.country

    return (
        <div className="country">
            <h1>Name : {name.common}</h1>
            <img src={flags.png} alt="" />
           <p>Area : {area}</p>
           <p>Region : {region}</p>
        </div>
    );
};

export default Country;