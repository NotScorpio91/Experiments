import React, { useState } from "react";

function BorderChangingInput() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setDisplayValue(inputValue);
  };
  const handleClear = () => {
    setInputValue("");
    setDisplayValue("");
  };

  return (
    <div>
      <div className="min-w-64 relative">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="text"
          id="first_name"
          value={inputValue}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 relative"
          placeholder="Password"
          required
        />
        <button
          onClick={handleClick}
          className="mt-2 bg-blue-500 text-white p-2 rounded-lg"
        >
          Show Input Value
        </button>
        <button
          onClick={handleClear}
          className="mt-2 bg-blue-500 text-white p-2 rounded-lg"
        >
          Clear
        </button>
        {displayValue == "" ? (
          ""
        ) : (
          <p
            className={`w-fit bg-slate-50/80 text-black p-1 mt-5 rounded ${
              displayValue == "Done" || displayValue == "done"
                ? "text-green-400"
                : ""
            }`}
          >
            {" "}
            {displayValue}
          </p>
        )}
      </div>
    </div>
  );
}

export default BorderChangingInput;
