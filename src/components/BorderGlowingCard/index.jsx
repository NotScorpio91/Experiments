import React from "react";
import "./index.css";
import { FaLocationArrow } from "react-icons/fa";
import Button from "../CustomButtons/3dButton/index";

function index({png='',title='title', about='about', icons=[], link=''}) {
  return (
    <div class="containers">
      <div class="button">
        <div class="bg-white shadow-lg rounded-xl overflow-hidden max-w-xs order-3 md:row-start-1 md:col-start-2 lg:order-none">
          <div>
            <img
              src={png}
              alt="img"
              class="w-full h-40 sm:h-48 object-cover"
            />
          </div>
          <div class=" flex flex-col items-start py-5 px-6 sm:px-4 text-start">
            <h2 class="text-xl sm:text-2xl text-gray-800 font-semibold ">
              {title}
            </h2>
            <p class="text-gray-500 leading-relaxed text-sm">{about}</p>
            <div class="flex -space-x-3 rtl:space-x-reverse mt-2">
              {icons.map((icon, index) => (
                <div key={index} className="icon w-10 h-10 border rounded-full flex justify-center items-center bg-gray-50">
                  {icon}
                </div>
              ))}
            </div>
            <a href={link} target="blank">
              <div className="mt-3">
                <Button title=" Check Live Site" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
