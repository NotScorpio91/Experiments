import React from "react";

import card_1 from "../../assets/ImageCardHoverEffect/card_1.jpg";
import card_2 from "../../assets/ImageCardHoverEffect/card_2.jpg";
import card_3 from "../../assets/ImageCardHoverEffect/card_3.jpg";
import card_4 from "../../assets/ImageCardHoverEffect/card_4.jpg";

import sm_card_1 from "../../assets/ImageCardHoverEffect/sm_card_1.jpg";
import sm_card_2 from "../../assets/ImageCardHoverEffect/sm_card_2.jpg";
import sm_card_3 from "../../assets/ImageCardHoverEffect/sm_card_3.jpg";
import sm_card_4 from "../../assets/ImageCardHoverEffect/sm_card_4.jpg";

const Card = () => {
  const cards = [
    { src: sm_card_1, className: "z-30 w-24 h-24 rotate-3 group-hover:translate-x-56 group-hover:-rotate-[5deg] group-hover:-translate-y-[136px] group-hover:delay-200" },
    { src: card_3, className: "z-50 w-60 h-60 rotate-3 group-hover:translate-x-36 group-hover:rotate-[10deg] group-hover:translate-y-4" },
    { src: sm_card_2, className: "z-40 w-24 h-24 rotate-3 group-hover:-translate-x-52 group-hover:rotate-[5deg] group-hover:-translate-y-[136px] group-hover:delay-200" },
    { src: card_2, className: "z-40 w-60 h-60 -rotate-3 group-hover:translate-x-6 group-hover:rotate-[5deg]" },
    { src: sm_card_3, className: "z-30 w-24 h-24 rotate-3 group-hover:translate-x-64 group-hover:rotate-[22deg] group-hover:translate-y-40 group-hover:delay-200" },
    { src: card_1, className: "z-30 w-60 h-60 group-hover:-translate-x-16 group-hover:-rotate-[4deg]" },
    { src: sm_card_4, className: "z-40 w-24 h-24 rotate-3 group-hover:-translate-x-64 group-hover:-rotate-[22deg] group-hover:translate-y-36 group-hover:delay-200" },
    { src: card_4, className: "z-20 w-60 h-60 group-hover:-translate-x-[144px] group-hover:-rotate-12 group-hover:translate-y-1" }
  ];

  return (
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
  );
}

export default Card;
