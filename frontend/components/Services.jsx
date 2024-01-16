import React, { useState } from "react";
import Image from "next/image";

const Services = ({ formData, formErrors, updateFormData }) => {
  const [selectedService, setSelectedService] = useState(formData.service);

  const handleSelect = (option) => {
    setSelectedService(option);
    updateFormData("service", option);
  };

  return (
    <div className="w-full">
      <div className="ml-6">
        <h3 className="text-xl font-bold">Our services</h3>
        <p className="text-sm text-gray-500 my-3">
          Please select which service you are interested in.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 m-6 md:flex md:flex-col">
        <div
          className={`flex gap-3 items-center px-7 py-5 border-2 shadow-md rounded-lg hover:border-2 hover:border-primary cursor-pointer ${
            selectedService === "development" ? "border-primary" : ""
          }`}
          onClick={() => handleSelect("development")}
        >
          <Image
            src="/assets/icons/development.svg"
            width={30}
            height={30}
            alt="dev"
          />
          <p className="font-bold">Development</p>
        </div>
        <div
          className={`flex gap-3 items-center px-7 py-5 border-2 shadow-md rounded-lg hover:border-2 hover:border-primary cursor-pointer ${
            selectedService === "web-design" ? "border-primary" : ""
          }`}
          onClick={() => handleSelect("web-design")}
        >
          <Image
            src="/assets/icons/webdesign.svg"
            width={30}
            height={30}
            alt="web-design"
          />
          <p className="font-bold">Web Design</p>
        </div>
        <div
          className={`flex gap-3 items-center px-7 py-5 border-2 shadow-md rounded-lg  hover:border-primary cursor-pointer ${
            selectedService === "marketing" ? "border-primary" : ""
          }`}
          onClick={() => handleSelect("marketing")}
        >
          <Image
            src="/assets/icons/marketing.svg"
            width={30}
            height={30}
            alt="marketing"
          />
          <p className="font-bold">Marketing</p>
        </div>
        <div
          className={`flex gap-3 items-center px-7 py-5 border-2 shadow-md rounded-lg hover:border-2 hover:border-primary cursor-pointer ${
            selectedService === "other" ? "border-primary" : ""
          }`}
          onClick={() => handleSelect("other")}
        >
          <Image
            src="/assets/icons/setting.svg"
            width={30}
            height={30}
            alt="other"
          />
          <p className="font-bold">Other</p>
        </div>
      </div>
      {formErrors.service && (
        <p className="text-red-600">{formErrors.service}</p>
      )}
    </div>
  );
};

export default Services;
