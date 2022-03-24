import React from 'react';
import Dial from '../DIal/Dial';

const Display = (props) => {
    return (
        <div>
            <h2>Name : {props.name}</h2>
            <p> So far steps today: {props.steps}</p>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;