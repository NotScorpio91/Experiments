import React from "react";

import card_1 from "../assets/card_1.jpg";
import card_2 from "../assets/card_2.jpg";
import card_3 from "../assets/card_3.jpg";
import card_4 from "../assets/card_4.jpg";

import sm_card_1 from "../assets/sm_card_1.jpg";
import sm_card_2 from "../assets/sm_card_2.jpg";
import sm_card_3 from "../assets/sm_card_3.jpg";
import sm_card_4 from "../assets/sm_card_4.jpg";

function Card() {
  return (
    <div className="flex justify-center items-center group">
      <img
        className=" rounded-md group z-30  w-24 h-24 absolute rotate-3 group-hover:translate-x-56 group-hover:-rotate-[5deg] transition-all group-hover:-translate-y-[136px] duration-200 ease-in  delay-100 group-hover:delay-200  "
        src={sm_card_1}
        alt=""
      />
      <img
        className=" w-60 h-60 rounded-md  absolute z-50 rotate-3 group group-hover:translate-x-36 group-hover:rotate-[10deg] transition-all group-hover:translate-y-4 duration-200 ease-in delay-100 "
        src={card_3}
        alt=""
      />
      <img
        className=" rounded-md group  z-40 w-24 h-24 absolute rotate-3 group-hover:-translate-x-52 group-hover:rotate-[5deg] transition-all group-hover:-translate-y-[136px] duration-200 ease-in delay-100 group-hover:delay-200 "
        src={sm_card_2}
        alt=""
      />
      <img
        className=" w-60 h-60 rounded-md  absolute z-40 -rotate-3 group group-hover:translate-x-6 group-hover:rotate-[5deg] transition-all duration-200 ease-in delay-100 "
        src={card_2}
        alt=""
      />
      <img
        className=" rounded-md group  z-30 w-24 h-24 absolute rotate-3 group-hover:translate-x-64 group-hover:rotate-[22deg] transition-all group-hover:translate-y-40 duration-200 ease-in  delay-100 group-hover:delay-200 "
        src={sm_card_3}
        alt=""
      />
      <img
        className=" w-60 h-60 rounded-md  absolute z-30 group group-hover:-translate-x-16 group-hover:-rotate-[4deg] transition-all duration-200 ease-in delay-100 "
        src={card_1}
        alt=""
      />
      <img
        className=" rounded-md group  z-40 w-24 h-24 absolute rotate-3 group-hover:-translate-x-64 group-hover:-rotate-[22deg] transition-all group-hover:translate-y-36 duration-200 ease-in delay-100 group-hover:delay-200 "
        src={sm_card_4}
        alt=""
      />
      <img
        className=" w-60 h-60 rounded-md  absolute z-20 group group-hover:-translate-x-[144px] group-hover:-rotate-12 group-hover:translate-y-1 transition-all duration-200 ease-in  delay-100 "
        src={card_4}
        alt=""
      />
    </div>
  );
}

export default Card;
