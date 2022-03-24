import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps , setSteps] = useState(0);

    const increeaseSteps =()=>{
        const newStesp = steps + 1;
        setSteps(newStesp);
      
    }

    useEffect(()=>{
        console.log('hello');
    },[])

    return (
        <div>
            <h1>Hello from smart watch</h1>
            <h3>My current steps : {steps}</h3>
            <button onClick={increeaseSteps}>De dourr</button>
          
            <Display name="GArmin" steps={steps}></Display>
        </div>
    );
};

export default Watch;