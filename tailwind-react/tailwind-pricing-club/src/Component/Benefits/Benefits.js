import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";

const Benefits = (props) => {
  return (
    <div>
      <p className="flex items-center">
        {/* <CheckCircleIcon className="w-4 h-4 text-green-700 mr-2"></CheckCircleIcon> */}
        <CheckCircleIcon className="text-green-700 mr-2 w-4 h-4"></CheckCircleIcon>
        {props.benefit}
      </p>
      
    </div>
  );
};

export default Benefits;
