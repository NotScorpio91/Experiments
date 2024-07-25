import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-sky-400 " : "text-gray-950";
  };

  return (
    <div className="flex justify-center">
      <div className="flex py-2 xl:px-16 gap xl:justify-around justify-between items-center w-full 2xl:w-[1903px] md:px-4 font-roboto fixed z-50 backdrop-blur border-b">
        <div className="flex justify-between items-center w-full px-4">
          <Link to="/">
            <div className="w-fit p-2 flex justify-center items-center z-50">
              <img
                src={Logo}
                alt="logo"
                className="md:w-32 w-24 md:block cursor-pointer"
              />
            </div>
          </Link>
          {show ? (
            <IoCloseSharp onClick={handleClick} className="md:hidden block" />
          ) : (
            <RxHamburgerMenu
              onClick={handleClick}
              className="md:hidden block"
            />
          )}
        </div>

        <div
          className={`md:hidden absolute backdrop-blur-lg w-full bg-gray-50/70 h-screen top-[69px] p-4 flex flex-col items-start gap-8 ${
            show ? "black" : "hidden"
          }`}
        >
          <Link to="/" onClick={handleClick}>
            <span
              className={`relative text-base font-medium w-full  cursor-pointer group-hover:transition-all block py-2 px-3 bg-gray-200 shadow-lg text-black hover:bg-blue-700 rounded ${isActive(
                "/"
              )}`}
            >
              Home
            </span>
          </Link>
          <Link to="/about" onClick={handleClick}>
            <span
              className={`relative text-base font-medium w-full cursor-pointer group-hover:transition-all block py-2 px-3 bg-gray-200 shadow-lg text-black hover:bg-blue-700 rounded ${isActive(
                "/about"
              )}`}
            >
              About
            </span>
          </Link>
          <Link to="/projects" onClick={handleClick}>
            <span
              className={`relative text-base font-medium w-full cursor-pointer group-hover:transition-all block py-2 px-3 bg-gray-200 shadow-lg text-black hover:bg-blue-700 rounded ${isActive(
                "/projects"
              )}`}
            >
              Projects
            </span>
          </Link>
        </div>

        <div className="md:flex gap-5 hidden relative ">
          <Link to="/">
            <div className="relative group">
              <span
                className={`relative text-base hover:font-medium group-hover:text-sky-400 cursor-pointer group-hover:transition-all  ${isActive(
                  "/"
                )}`}
              >
                Home
              </span>
            </div>
          </Link>
          <Link to="/about">
            <div className="relative group">
              <span
                className={`relative text-base hover:font-medium group-hover:text-sky-400 cursor-pointer group-hover:transition-all ${isActive(
                  "/about"
                )}`}
              >
                About
              </span>
            </div>
          </Link>
          <Link to="/projects">
            <div className="relative group">
              <span
                className={`relative text-base hover:font-medium  group-hover:text-sky-400 cursor-pointer group-hover:transition-all ${isActive(
                  "/projects"
                )}`}
              >
                Projects
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
