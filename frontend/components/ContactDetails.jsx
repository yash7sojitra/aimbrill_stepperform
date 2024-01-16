import React from "react";
import Image from "next/image";

const ContactDetails = ({ formData, formErrors, updateFormData }) => {
  const { name, email, phone, company } = formData;

  const handleNameChange = (event) => {
    updateFormData("name", event.target.value);
  };

  const handleEmailChange = (event) => {
    updateFormData("email", event.target.value);
  };

  const handlePhoneChange = (event) => {
    updateFormData("phone", event.target.value);
  };

  const handleCompanyChange = (event) => {
    updateFormData("company", event.target.value);
  };

  return (
    <div className="w-full">
      <div className="ml-6">
        <h3 className="text-xl font-bold">Contact details</h3>
        <p className="text-sm text-gray-500 my-3">
          Lorem ipsum dolor sit amet consectetur adipisc.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-7 m-6 md:flex md:flex-col">
        <span className="flex flex-col gap-3">
          <label className="font-bold">Name</label>
          <div className="flex justify-between bg-white rounded-full border-[1px] shadow-lg py-2 px-2">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Carter"
              className="px-4 outline-none w-full h-10"
              value={name}
              onChange={handleNameChange}
            />
            <Image
              src="/assets/icons/name.svg"
              width={20}
              height={20}
              className="mx-2"
              alt="name"
            />
          </div>
          {formErrors.name && <p className="text-red-600">{formErrors.name}</p>}
        </span>
        <span className="flex flex-col gap-3">
          <label className="font-bold">Email</label>
          <div className="flex justify-between bg-white rounded-full border-[1px] shadow-lg py-2 px-2">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Email address"
              className="px-4 outline-none w-full h-10"
              value={email}
              onChange={handleEmailChange}
            />
            <Image
              src="/assets/icons/mail.svg"
              width={20}
              height={20}
              className="mx-2"
              alt="email"
            />
          </div>

          {formErrors.email && (
            <p className="text-red-600">{formErrors.email}</p>
          )}
        </span>
        <span className="flex flex-col gap-3">
          <label className="font-bold">Phone Number</label>
          <div className="flex justify-between bg-white rounded-full border-[1px] shadow-lg py-2 px-2">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="(123) 456 - 7890"
              className="px-4 outline-none w-full h-10"
              value={phone}
              onChange={handlePhoneChange}
            />
            <Image
              src="/assets/icons/phone.svg"
              width={20}
              height={20}
              className="mx-2"
              alt="phone"
            />
          </div>

          {formErrors.phone && (
            <p className="text-red-600">{formErrors.phone}</p>
          )}
        </span>
        <span className="flex flex-col gap-3">
          <label className="font-bold">Company</label>
          <div className="flex justify-between bg-white rounded-full border-[1px] shadow-lg py-2 px-2">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Company name"
              className="px-4 outline-none w-full h-10"
              value={company}
              onChange={handleCompanyChange}
            />
            <Image
              src="/assets/icons/company.svg"
              width={20}
              height={20}
              className="mx-2 "
              alt="company"
            />
          </div>

          {formErrors.company && (
            <p className="text-red-600">{formErrors.company}</p>
          )}
        </span>
      </div>
    </div>
  );
};

export default ContactDetails;
