import React, { useState, useEffect } from "react";
import { IoMdColorFill } from "react-icons/io";
import { GrClearOption } from "react-icons/gr";
import { MdOutlineContentCopy } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function hexToRgb(hex) {
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `${r}, ${g}, ${b}`;
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }

  h = (h * 360).toFixed(1);
  s = (s * 100).toFixed(1);
  l = (l * 100).toFixed(1);

  return `${parseFloat(h)}, ${parseFloat(s)}%, ${parseFloat(l)}%`;
}

function ColorPicker() {
  const [color, setColor] = useState("");
  const [rgb, setRgb] = useState("");
  const [hsl, setHsl] = useState("");

  useEffect(() => {
    if (color) {
      const rgbValue = hexToRgb(color);
      setRgb(rgbValue);

      const [r, g, b] = rgbValue.split(", ").map(Number);
      const hslValue = rgbToHsl(r, g, b);
      setHsl(hslValue);
    } else {
      setRgb("");
      setHsl("");
    }
  }, [color]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleClearClick = () => {
    setColor("");
  };

  const copyToClipboardAll = () => {
    if (color !== "") {
      navigator.clipboard
        .writeText(`HEX: ${color}, RGB: ${rgb}, HSL: ${hsl}`)
        .then(() => {
          toast.success(
            `All colors copied to clipboard! HEX: ${color}, RGB: ${rgb}, HSL: ${hsl}`
          );
        })
        .catch((err) => {
          console.error("Failed to copy colors: ", err);
        });
    }
  };
  
  const copyToClipboardHex = () => {
    if (color !== "") {
      navigator.clipboard
        .writeText(`HEX: ${color}`)
        .then(() => {
          toast.success(
            `Hex color copied to clipboard! HEX: ${color},`
          );
        })
        .catch((err) => {
          console.error("Failed to copy color: ", err);
        });
    }
  };
  const copyToClipboardRgb = () => {
    if (color !== "") {
      navigator.clipboard
        .writeText(`RGB: ${rgb}`)
        .then(() => {
          toast.success(
            `Rgb color copied to clipboard! RGB: ${rgb},`
          );
        })
        .catch((err) => {
          console.error("Failed to copy color: ", err);
        });
    }
  };
  const copyToClipboardHsl = () => {
    if (color !== "") {
      navigator.clipboard
        .writeText(`HSL: ${hsl}`)
        .then(() => {
          toast.success(
            `Hsl color copied to clipboard! RGB: HSL: ${hsl}`
          );
        })
        .catch((err) => {
          console.error("Failed to copy color: ", err);
        });
    }
  };

  return (
    <div className="app h-[100vh]">
      <div className="flex flex-col justify-center items-center h-full w-full gap-2">
        <div
          className="border rounded-md p-10 text-gray-500 border-gray-300 bg-gray-500 shadow-xl dark:shadow-none w-96 h-96"
          style={{ backgroundColor: color }}
        ></div>
        <div className="flex gap-2 flex-col w-96">
          <label
            htmlFor="input-group-1"
            className="block text-lg font-semibold text-gray-900"
          >
            Your Color
          </label>
          <div className="flex  flex-col gap-3">
            <div className="flex gap-1 items-center">
              HEX:
              <div className="flex justify-between w-full  rounded-md px-2 items-center  h-full">
                <p className="text-lg font-semibold text-gray-900 bg-gray-500 w-full rounded-md h-full flex items-center pl-2">
                {color}
                  </p>
                <button
                  title="Copy"
                  onClick={copyToClipboardHex}
                  className="text-sm rounded-lg block p-2.5 bg-gray-500 border-gray-100 placeholder-gray-200 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-2 focus:shadow-lg shadow-blue-500"
                >
                  <MdOutlineContentCopy size={20} />
                </button>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              RGB:
              <div className="flex  justify-between w-full  rounded-md px-2 items-center  h-full">
                <p className="text-lg font-semibold text-gray-900 bg-gray-500 w-full rounded-md h-full flex items-center pl-2">
                {rgb}
                  </p>
                <button
                  title="Copy"
                  onClick={copyToClipboardRgb}
                  className="text-sm rounded-lg block p-2.5 bg-gray-500 border-gray-100 placeholder-gray-200 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-2 focus:shadow-lg shadow-blue-500"
                >
                  <MdOutlineContentCopy size={20} />
                </button>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              HSL:
              <div className="flex  justify-between w-full  rounded-md px-2 items-center  h-full">
                <p className="text-lg font-semibold text-gray-900 bg-gray-500 w-full rounded-md h-full flex items-center pl-2 ml-1">
                  {hsl}
                  </p>
                <button
                  title="Copy"
                  onClick={copyToClipboardHsl}
                  className="text-sm rounded-lg block p-2.5 bg-gray-500 border-gray-100 placeholder-gray-200 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-2 focus:shadow-lg shadow-blue-500"
                >
                  <MdOutlineContentCopy size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="relative mb-6 w-full flex">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none w-full">
              <IoMdColorFill className="text-gray-200" size={20} />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="text-sm rounded-lg block w-full ps-10 p-2.5 bg-gray-500 border-gray-100 placeholder-gray-200 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-2 focus:shadow-lg shadow-blue-500"
              placeholder="Enter your color"
              onChange={handleColorChange}
              value={color}
            />
            <div className="relative" title="Pick color">
              <input
                type="color"
                id="input-group-1"
                className="text-sm rounded-lg block ps-10 p-2.5 h-full bg-gray-500 border-gray-100 placeholder-gray-200 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-2 focus:shadow-lg shadow-blue-500"
                onChange={handleColorChange}
                value={color}
                style={{ backgroundColor: color }}
              />
            </div>
            <button
              title="Copy"
              onClick={copyToClipboardAll}
              className="text-sm rounded-lg block p-2.5 bg-gray-500 border-gray-100 placeholder-gray-200 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-2 focus:shadow-lg shadow-blue-500"
            >
              <MdOutlineContentCopy size={20} />
            </button>
            <button
              title="Clear"
              onClick={handleClearClick}
              className="text-sm rounded-lg block p-2.5 bg-gray-500 border-gray-100 placeholder-gray-200 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-2 focus:shadow-lg shadow-blue-500"
            >
              <GrClearOption size={20} />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition="Bounce"
      />
    </div>
    
  );
}

export default ColorPicker;
