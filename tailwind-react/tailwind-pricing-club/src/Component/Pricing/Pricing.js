import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOfOption = [
    {
      id: 1,
      name: "free",
      price: 0,
      benefits: [
        "lifetime fres",
        "Unlimited deals",
        "localized deals",
        "Crazy deals",
        "fantastic deals"
      ],
    },
    {
      id: 1,
      name: "Regular",
      price: 50,

      benefits: [
        "everything on free",
        "everything free",
        "Unlimited deals",
        "localized deals",
        "Crazy deals",
      ],
    },
    {
      id: 1,
      name: "Premium",
      price: 100,

      benefits: [
        "everything on regular",
        "lifetime fres",
        "Unlimited deals",
        "localized deals",
        "Crazy deals",
      ],
    },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-8">
      <h1 className="text-6xl">Best Deals of the Town </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ullam earum
        fugit vel nihil, commodi ut voluptate eaque! Perspiciatis, ratione!
      </p>

      <div className="grid md:grid-cols-3 gap-3 mt-5">
        {pricingOfOption.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
