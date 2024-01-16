import React, { useEffect, useState } from "react";

const Budget = ({ formData, formErrors, updateFormData }) => {
  const budgetOptions = [
    { id: "0", value: "$5,000-$10,000" },
    { id: "1", value: "$10,000-$20,000" },
    { id: "2", value: "$20,000-$50,000" },
    { id: "3", value: "$50,000+" },
  ];

  const [budgetRange, setBudgetRange] = useState(
    formData.id || budgetOptions[0].id
  );

  useEffect(() => {
    updateFormData("budgetRange", budgetOptions[0]);
  }, []);

  const handleSelect = (id) => {
    setBudgetRange(id);
    updateFormData("budgetRange", budgetOptions[id]);
    console.log(formData);
  };

  return (
    <div className="w-full">
      <div className="ml-6">
        <h3 className="text-xl font-bold">What’s your project budget?</h3>
        <p className="text-sm text-gray-500 my-3">
          Please select the project budget range you have in mind.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 md:gap-2 m-6 md:flex md:flex-col">
        {budgetOptions.map((option) => (
          <div
            key={option.id}
            className={`flex pl-10 gap-2 items-center px-6 py-6 border-2 shadow-md rounded-lg hover:border-2 hover:border-primary cursor-pointer ${
              budgetRange === option.id ? "border-primary" : ""
            }`}
            onClick={() => handleSelect(option.id)}
          >
            <input
              type="radio"
              id={option.id}
              name="budgetOption"
              value={option.value}
              checked={budgetRange === option.id}
              onChange={() => handleSelect(option.id)}
              className={`checked:border-2 checked:bg-white w-5 h-5 checked:`}
            />
            <p className="font-bold">{option.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Budget;
