import React, { useState } from "react";
import { IoMdColorFill } from "react-icons/io";
import { GrClearOption } from "react-icons/gr";

function Index() {
  const [color, setColor] = useState("");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleClearClick = () => {
    setColor("");
  };

  return (
    <div className="app h-[100vh]">
      <div className="flex flex-col justify-center items-center h-full w-full gap-8">
        <div
          className=" border  rounded-md  p-10  text-gray-500  border-gray-300 bg-gray-500  shadow-xl dark:shadow-none w-96 h-96"
          style={{ backgroundColor: `${color}` }}
        ></div>
        <div className="flex gap-1 flex-col w-96">
          <label
            for="input-group-1"
            class="block mb-2 text-lg font-semibold text-gray-900 "
          >
            Your Color
          </label>
          <div class="relative mb-6 w-full flex">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none w-full">
              <IoMdColorFill className="text-gray-200" size={20} />
            </div>
            <input
              type="text"
              id="input-group-1"
              class=" text-sm rounded-lg  block w-full ps-10 p-2.5  bg-gray-500 border-gray-100 placeholder-gray-200 text-white  focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-2 focus:shadow-lg shadow-blue-500"
              placeholder="Enter your color"
              onChange={handleColorChange}
              value={color}
            />
            <div className="relative">
            <input
              type="color"
              id="input-group-1"
              class=" text-sm rounded-lg  block  ps-10 p-2.5 h-full  bg-gray-500 border-gray-100 placeholder-gray-200 text-white  focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-2 focus:shadow-lg shadow-blue-500"
              placeholder="Enter your color"
              onChange={handleColorChange}
              value={color}
               style={{ backgroundColor: `${color}` }}
            />
            </div>
            <button
              onClick={handleClearClick}
              className="text-sm rounded-lg  block  p-2.5  bg-gray-500 border-gray-100 placeholder-gray-200 text-white  focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-2 focus:shadow-lg shadow-blue-500"
            >
              <GrClearOption size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
