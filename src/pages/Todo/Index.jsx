import React, { useState } from "react";
import { LuListTodo } from "react-icons/lu";
import { IoAddCircle, IoCloseCircleOutline } from "react-icons/io5";
import { CiText } from "react-icons/ci";

function Index() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    if (value == "") return;
    setList([...list, value]);
    setValue("");
  };

  const handleDelete = (index) => {
    setList(list.filter((i) => i !== index));
  };

  return (
    <div className="app min-h-[100vh]">
      <div className="w-full flex justify-center items-center pt-44">
        <div className="flex gap-2 justify-center flex-col w-[800px]">
          <label
            htmlFor="input-group-1"
            className="block text-lg font-semibold text-gray-900"
          >
            Your Task
          </label>

          <div className="relative mb-6 w-full flex gap-2">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none w-full">
              <LuListTodo className="text-gray-200" size={20} />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="text-sm rounded-lg block w-full ps-10 p-2.5 bg-gray-500 border-gray-100 placeholder-gray-200 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-2 focus:shadow-lg shadow-blue-500"
              placeholder="Enter your task"
              value={value}
              onChange={handleChange}
            />
            <button
              title="Add"
              className="text-sm rounded-lg block p-2.5 bg-gray-500 border-gray-100 placeholder-gray-200 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-2 focus:shadow-lg shadow-blue-500"
              onClick={handleAdd}
            >
              <IoAddCircle size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-1">
            {list.map((item, index) => (
              <>
                <div key={index} className="relative w-full flex gap-2">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none w-full">
                    <CiText className="text-gray-200" size={20} />
                  </div>
                  <p className="text-sm rounded-lg block w-full ps-10 p-2.5 bg-gray-500 border-gray-100 placeholder-gray-200 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-2 focus:shadow-lg shadow-blue-500">
                    {item}
                  </p>
                  <button
                    title="Add"
                    className="text-sm rounded-lg block p-2.5 bg-gray-500 border-gray-100 placeholder-gray-200 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-2 focus:shadow-lg shadow-blue-500"
                    onClick={() => handleDelete(item)}
                  >
                    <IoCloseCircleOutline size={20} />
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
