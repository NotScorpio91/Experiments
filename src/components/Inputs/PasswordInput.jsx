import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";

function PasswordInput({label='Password'}) {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const icon = show ? <FaRegEyeSlash /> : <FaRegEye />;
  const type = show ? "text" : "password";

  return (
    <div className=" min-w-64 relative">

      <input
        type={type}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 relative"
        placeholder="Password"
        required
      />
      <div onClick={handleClick} className="absolute right-4  top-3 ">
        {icon}
      </div>
    </div>
  );
}

export default PasswordInput;
