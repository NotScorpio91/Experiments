import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

function Navbar({}) {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="flex py-4 xl:px-16 gap  xl:justify-around justify-between items-center w-full md:px-4  font-roboto relative">
      <div className="flex justify-between items-center w-full px-4">
        <Link herf="/">
          <div className="w-fit p-2 flex justify-center items-center">
            <img
              src={Logo}
              alt="logo"
              className="md:w-32 w-24  md:block cursor-pointer"
            />
          </div>
        </Link>
        {show ? (
          <IoCloseSharp onClick={handleClick} className="md:hidden block" />
        ) : (
          <RxHamburgerMenu onClick={handleClick} className="md:hidden block" />
        )}
      </div>
      <div
        className={` md:hidden absolute bg-black w-full h-screen top-[75px] text-white p-4 flex flex-col items-start gap-16 ${
          show ? "black" : "hidden"
        }`}
      >
        <span className="relative text-base font-medium w-full  cursor-pointer group-hover:transition-all  block py-2 px-3 text-white bg-gray-700 hover:bg-blue-700 rounded ">
          Home
        </span>
        <span className="relative text-base font-medium w-full  cursor-pointer group-hover:transition-all  block py-2 px-3 text-white bg-gray-700 hover:bg-blue-700 rounded ">
          Home
        </span>
        <span className="relative text-base font-medium w-full  cursor-pointer group-hover:transition-all  block py-2 px-3 text-white bg-gray-700 hover:bg-blue-700 rounded ">
          Home
        </span>
      </div>
      <div className="md:flex gap-5 hidden relative">
        <Link herf="/">
          <div className="relative group">
            <div className="absolute -inset-0.5 group-hover:bg-sky-300 group-hover:rounded-md group-hover:blur-[30px]  hidden group-hover:block group-hover:transition-all ease-in duration-300"></div>
            <span className="relative text-base font-medium group-hover:text-sky-400 cursor-pointer group-hover:transition-all ">
              Home
            </span>
          </div>
        </Link>
        <div className="relative group">
          <div className="absolute -inset-0.5 group-hover:bg-sky-300 group-hover:rounded-md group-hover:blur-[30px]  hidden group-hover:block group-hover:transition-all ease-in duration-300"></div>
          <span className="relative text-base font-medium group-hover:text-sky-400 cursor-pointer group-hover:transition-all ">
            About
          </span>
        </div>
        <div className="relative group">
          <div className="absolute -inset-0.5 group-hover:bg-sky-300 group-hover:rounded-md group-hover:blur-[30px]  hidden group-hover:block group-hover:transition-all ease-in duration-300"></div>
          <span className="relative text-base font-medium group-hover:text-sky-400 cursor-pointer group-hover:transition-all ">
            List
          </span>
        </div>
        <div className="relative group">
          <div className="absolute -inset-0.5 group-hover:bg-sky-300 group-hover:rounded-md group-hover:blur-[30px]  hidden group-hover:block group-hover:transition-all ease-in duration-300"></div>
          <span className="relative text-base font-medium group-hover:text-sky-400 cursor-pointer group-hover:transition-all ">
            Projects
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
