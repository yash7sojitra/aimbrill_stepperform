"use client";

import React, { useState } from "react";
import Card from "./Card";
import ContactDetails from "./ContactDetails";
import Services from "./Services";
import Button from "./Button";
import Budget from "./Budget";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Submit = ({ onSubmit }) => {
  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 ">
      <div className="flex flex-col items-center gap-5">
        <Image
          src="/assets/icons/submit.svg"
          width={150}
          height={150}
          alt="submit"
          className="md:w-32"
        />
        <h3 className="text-2xl font-bold">Submit your quote request</h3>
        <p className=" text-gray-500 text-center w-1/2 ">
          Please review all the information you previously typed in the past
          steps, and if all is okay, submit your message to receive a project
          quote in 24 - 48 hours.
        </p>
      </div>
      <Button text="Submit" onClick={handleSubmit} />
    </div>
  );
};

const formArray = [
  {
    id: 0,
    name: "Contact",
    component: <ContactDetails />,
  },
  {
    id: 1,
    name: "Services",
    component: <Services />,
  },
  {
    id: 2,
    name: "Budget",
    component: <Budget />,
  },
  {
    id: 3,
    name: "Submit",
    component: <Submit />,
  },
];

const Form = () => {
  const router = useRouter();

  const [activeStep, setActiveStep] = useState(0);

  const [formState, setFormState] = useState({
    contact: {
      name: "",
      email: "",
      phone: "",
      company: "",
    },
    services: { service: "" },
    budget: { budgetRange: "" },
  });

  const [formErrors, setFormErrors] = useState({
    contact: {},
    services: {},
    budget: {},
  });

  const resetFormData = () => {
    setFormState({
      contact: {
        name: "",
        email: "",
        phone: "",
        company: "",
      },
      services: { service: "" },
      budget: { budgetRange: { id: "", value: "" } },
    });
  };

  const handlePrevious = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    if (validateFormSection() === true) {
      setActiveStep((prev) => (prev < formArray.length - 1 ? prev + 1 : prev));
    }
  };

  const handleSubmit = async (e) => {
    // Handle the final submission logic with formData
    const contactDetails = formState["contact"];
    const services = formState["services"];
    const budget = formState["budget"];

    const employee = {
      ...contactDetails,
      service: services.service,
      budget: budget.budgetRange.value,
    };

    try {
      const response = await fetch("http://localhost:5000/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
      });

      if (response.ok) {
        router.push("/");
        alert("Your Data is Submitted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (section, fieldName, value) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [section]: {
        ...prevFormState[section],
        [fieldName]: value,
      },
    }));
  };

  const validateFormSection = () => {
    const currentSection = formArray[activeStep].name.toLowerCase();
    const currentFormData = formState[currentSection];
    const currentFormErrors = formErrors[currentSection];

    let isValid = true;

    if (currentSection === "contact") {
      // Contact Details Validation
      const { name, email, phone, company } = currentFormData;

      // Validate Name
      if (!name.trim()) {
        currentFormErrors.name = "Name is required";
        isValid = false;
      } else {
        currentFormErrors.name = "";
      }

      // Validate Email Format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        currentFormErrors.email = "Invalid email format";
        isValid = false;
      } else {
        currentFormErrors.email = "";
      }

      // Validate Phone Format
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
        currentFormErrors.phone = "Invalid phone format";
        isValid = false;
      } else {
        currentFormErrors.phone = "";
      }

      if (!company.trim()) {
        currentFormErrors.company = "Company is required";
        isValid = false;
      } else {
        currentFormErrors.company = "";
      }
    } else if (currentSection === "services") {
      // Services Validation
      const { service } = currentFormData;

      // Validate selectedService (Assuming it's a required field)
      if (!service) {
        currentFormErrors.service = "Please select a service";
        isValid = false;
      } else {
        currentFormErrors.service = "";
      }
    }

    setFormErrors({ ...formErrors, [currentSection]: currentFormErrors });
    return isValid;
  };

  const CurrentFormComponent = formArray[activeStep].component;

  return (
    <section className="w-11/12   ">
      <div className="w-full min-h-fit  ">
        <Card>
          {/* Steppers  */}
          <div className="mx-6 grid grid-cols-10 gap-2">
            <span className="col-span-1 justify-self-center">
              <p
                className={`text-gray-800 bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center ${
                  activeStep >= 0 ? "!bg-primary !text-white" : ""
                }`}
              >
                1
              </p>
            </span>
            <span className="col-span-2 self-center">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-2 ${
                    activeStep == 0
                      ? "w-1/2 bg-primary rounded-l-full"
                      : "w-full bg-primary rounded-full"
                  }`}
                ></div>
              </div>
            </span>
            <span className="col-span-1 justify-self-center">
              <p
                className={`text-gray-800 bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center ${
                  activeStep >= 1 ? "!bg-primary !text-white" : ""
                }`}
              >
                2
              </p>
            </span>
            <span className="col-span-2 self-center">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-2 ${
                    activeStep === 1
                      ? "w-1/2 bg-primary rounded-l-full"
                      : activeStep >= 1
                      ? "w-full bg-primary rounded-full"
                      : ""
                  }`}
                ></div>
              </div>
            </span>
            <span className="col-span-1 justify-self-center">
              <p
                className={`text-gray-800 bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center ${
                  activeStep >= 2 ? "!bg-primary !text-white" : ""
                }`}
              >
                3
              </p>
            </span>
            <span className="col-span-2 self-center">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-2 ${
                    activeStep === 2
                      ? "w-1/2 bg-primary rounded-l-full"
                      : activeStep >= 2
                      ? "w-full bg-primary rounded-full"
                      : ""
                  }`}
                ></div>
              </div>
            </span>
            <span className="col-span-1 justify-self-center">
              <p
                className={`text-gray-800 bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center ${
                  activeStep >= 3 ? "!bg-primary !text-white" : ""
                }`}
              >
                4
              </p>
            </span>
          </div>

          <div className="h-[2px]  bg-gray-200 mx-6 my-4" />

          {React.cloneElement(CurrentFormComponent, {
            formData: formState[formArray[activeStep].name.toLowerCase()],
            formErrors: formErrors[formArray[activeStep].name.toLowerCase()],
            updateFormData: (fieldName, value) =>
              handleInputChange(
                formArray[activeStep].name.toLowerCase(),
                fieldName,
                value
              ),
            onSubmit: handleSubmit,
          })}
        </Card>
      </div>
      <div className="flex justify-between my-5">
        <Button
          text="Previous Step"
          className={`!bg-white !text-primary !border-[1px] !border-primary ${
            activeStep === 0 ? "invisible" : ""
          }`}
          disabled={activeStep === 0}
          onClick={handlePrevious}
        />
        <Button
          text="Next Step"
          className={`${activeStep === 3 ? "invisible" : ""}`}
          disabled={activeStep === 3}
          onClick={handleNext}
        />
      </div>
    </section>
  );
};

export default Form;
