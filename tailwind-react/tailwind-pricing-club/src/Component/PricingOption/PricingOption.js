import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import Benefits from "../Benefits/Benefits";

const PricingOption = (props) => {
  const { name, option, price , benefits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 py-2 rounded text-xl font-bold">{name}</h2>
      <p>
        <span className="text-6xl font-bold">{price}</span>
        <span className="text-xl font-bold text-gray-500">/mo</span>
      </p>
      <div>
        <h3 className="text-xl font-bold">Benefits : </h3>
        {
            benefits.map(benefit => <Benefits benefit={benefit}></Benefits>)
        }
        <button className='bg-green-500 text-white font-bold flex justify-center w-full py-2 rounded mt-4 hover:text-600 '>Buy Now <ArrowRightIcon className='w-6 h-6 ml-2 text-white'></ArrowRightIcon></button>
      </div>
      
    </div>
  );
};

export default PricingOption;
