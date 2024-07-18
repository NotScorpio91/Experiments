import React from "react";
// import "./index.css";

import card_1 from "./Images/card_1.jpg";
import card_2 from "./Images/card_2.jpg";
import card_3 from "./Images/card_3.jpg";

import sm_card_1 from "./Images/sm_card_1.jpg";
import sm_card_2 from "./Images/sm_card_2.jpg";
import sm_card_3 from "./Images/sm_card_3.jpg";
import sm_card_4 from "./Images/sm_card_4.jpg";
import MasterLayout from "../../Layouts/MasterLayout";

const Card = () => {
  const cards = [
    {
      src: sm_card_1,
      className:
        "z-30 w-[100px] h-[150px] rotate-3 group-hover:translate-x-96 group-hover:-rotate-[-15deg] group-hover:-translate-y-[230px] group-hover:delay-200",
    },
    {
      src: card_3,
      className:
        "z-50 w-[400px] h-[450px] rotate-3 group-hover:translate-x-80 group-hover:rotate-[10deg] group-hover:translate-y-4",
    },
    {
      src: sm_card_2,
      className:
        "z-30 group-hover:z-20 w-[100px] h-[150px] rotate-3 group-hover:-translate-x-52 group-hover:rotate-[5deg] group-hover:-translate-y-[250px] group-hover:delay-200",
    },
    {
      src: card_2,
      className:
        "z-40 w-[400px] h-[450px] -rotate-3 group-hover:translate-x-6 group-hover:rotate-[1deg] group-hover:-translate-y-1",
    },
    {
      src: sm_card_3,
      className:
        "z-30 group-hover:z-50 w-[100px] h-[150px] rotate-3 group-hover:translate-x-64 group-hover:rotate-[9deg] group-hover:translate-y-60 group-hover:delay-200",
    },
    {
      src: card_1,
      className:
        "z-30 w-[400px] h-[450px] group-hover:-translate-x-60 group-hover:translate-y-1 group-hover:-rotate-[5deg]",
    },
    {
      src: sm_card_4,
      className:
        "z-30 group-hover:z-40 w-[100px] h-[150px] rotate-3 group-hover:-translate-x-64 group-hover:-rotate-[22deg] group-hover:translate-y-60 group-hover:delay-200",
    },
  ];

  return (
    <div className="app">
      <div className="w-[100vw] h-[100vh] flex justify-center items-center  translate-x-">
        <div className="flex justify-center items-center group">
          {cards.map((card, index) => (
            <img
              key={index}
              className={`rounded-md absolute transition-all duration-200 ease-in delay-100 ${card.className}`}
              src={card.src}
              alt={`card-${index + 1}`}
            />
          ))}
        </div>
      </div>
      </div>
  );
};

export default Card;
