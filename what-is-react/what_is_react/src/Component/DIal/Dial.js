import React from 'react';

const Dial = (props) => {
    return (
        <div>
           <h3>This is dial</h3> 
           <p>Steps so far : {props.steps}</p>
        </div>
    );
};

export default Dial;