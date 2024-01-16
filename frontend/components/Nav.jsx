import React from "react";
import Button from "./Button";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="z-20 bg-white  w-full flex justify-between items-center h-20 sticky top-0 lg:h-16">
      <Link href="/">
        <h1 className="text-3xl font-bold lg:text-2xl xs:text-lg">
          Aimbrill Techinfo
        </h1>
      </Link>
      <Link href="/employees">
        <Button
          text="Employee List"
          className="lg:text-base lg:py-2 lg:px-4 xs:text-sm"
        />
      </Link>
    </nav>
  );
};

export default Nav;
