import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [steps , setSteps] = useState(0);

    const increeaseSteps =()=>{
        const newStesp = steps + 1;
        setSteps(newStesp);
      
    }

    useEffect(()=>{
        console.log(steps);
    },[steps])

    return (
        <div>
            <h1>Hello from smart watch</h1>
            <h3>My current steps : {steps}</h3>
            <button onClick={increeaseSteps}>De dourr</button>
        </div>
    );
};

export default Watch;