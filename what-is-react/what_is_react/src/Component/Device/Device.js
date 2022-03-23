import React from 'react';
import DeviceDetail from './DeviceDetail';

const Device = (props) => {
    return (
        <div>
          <h2>I have : {props.name}</h2>  
          <h3>
            Price : {props.price}
          </h3>
          <h4><DeviceDetail color = 'red'></DeviceDetail></h4>
        </div>
    );
};

export default Device;