import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <div className=" z-20 bg-white h-24 w-full flex justify-between  items-center sticky bottom-0  md:h-auto md:py-3 md:flex-col-reverse md:gap-2">
        <div className="absolute top-0 h-[1px]  bg-gray-400 w-full" />
        <div className="md:my-1">
          <h1 className="text-3xl font-bold lg:text-2xl xs:text-lg md:text-center">
            Aimbrill Techinfo
          </h1>
          <p className="md:text-center">
            Copyright &copy; 2021 Aimbrill Techinfo | All Rights Reserved
          </p>
        </div>
        <div className=" bg-white rounded-full border-[1px] shadow-lg py-2 px-2 lg:py-1 lg:px-1">
          <form className="flex justify-between pl-4">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter you email"
              className="outline-none"
            />
            <Button
              text="Subscribe"
              className="lg:text-base lg:py-2 lg:px-4 xs:text-sm"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
