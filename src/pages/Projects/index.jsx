import React, { useState } from "react";
import MasterLayout from "../../Layouts/MasterLayout";
import Card from "../../components/BorderGlowingCard";
import { FaReact, FaJava } from "react-icons/fa";
import { SiDjango, SiPython } from "react-icons/si";
import teksol from '../../assets/Projects/Space_Teksol.png'
import theteksol from '../../assets/Projects/Teksol-Services.png'
import cards from '../../assets/Custom/3dCards.png'
import colorpicker from '../../assets/Custom/ColorPicker.png'
import notepad from '../../assets/Projects/Note-Pal.png'
import { TbBrandRedux } from "react-icons/tb";
import { TbBrandThreejs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";

const Index = () => {
  const [activeTab, setActiveTab] = useState("ncj");
  const data = [
    {
      img: theteksol,
      title: "The Teksol",
      about:
        "Agency setup website",
      icons: [
        <FaReact size={20} />,
        <TbBrandRedux size={20} />,
        <FaBootstrap size={20} />,
        <SiTailwindcss size={20} />,
      ],
      link: "http://theteksol.com/",
    },
    {
      img: teksol,
      title: "Space Teksol",
      about:
        "Ppace theme portfolio",
      icons: [
        <FaReact size={20} />,
        <TbBrandRedux size={20} />,
        <TbBrandThreejs size={20} />,
        <TbBrandFramerMotion size={20} />,
        <SiTailwindcss size={20} />,
      ],
      link: "https://space-teksol.vercel.app/",
    },
    {
      img: notepad,
      title: "Note Pad",
      about:
        "A note pad website",
      icons: [
        <FaReact size={20} />,
        <TbBrandRedux size={20} />,
        <TbBrandThreejs size={20} />,
        <TbBrandFramerMotion size={20} />,
        <SiTailwindcss size={20} />,
      ],
      link: "https://notepall.vercel.app/",
    },
   
   
  ];
  const items = [
    {
      img: cards,
      title: "3d Cards",
      about:
        "",
      icons: [
        <FaReact size={20} />,
        <IoLogoCss3 size={20} />,
        <SiTailwindcss size={20} />,
      ],
      link: "/3D-Image-Slider",
    },
    {
      img: colorpicker,
      title: "Color Picker",
      about:
      "",
      icons: [
        <FaReact size={20} />,
        <SiTailwindcss size={20} />,
      ],
      link: "/color-picker",
    },
   
  ];


  return (
    <MasterLayout>
      <div className="flex flex-col justify-start items-center font-roboto w-full h-full md:mt-32 mt-32 gap-14 md:gap-20">
        <div className="flex flex-col justify-center items-center w-full gap-2">
          {activeTab === "ncj" && (
            <h1 className="text-4xl font-bold">My Projects</h1>
          )}
        {activeTab === "sec_cj" && (
          <h1 className="text-4xl font-bold">My Custom Components </h1>
        )}
          
        </div>
        <div className="flex justify-around items-center space-x-1 rounded-xl bg-gradient-to-r from-[#00c6ff] to-[#92EFFD] p-1 min-w-[320px] ">
          <div
            className={`w-full rounded-lg py-3 text-sm font-medium leading-5 text-white flex justify-center items-center   gap-1 cursor-pointer  ${
              activeTab === "ncj"
                ? "bg-gradient-to-r from-sky-400 to-sky-300 shadow-lg  outline-none"
                : "hover:bg-gradient-to-r from-sky-400 to-sky-300 hover:shadow-inner hover:text-white z-50"
            }`}
            onClick={() => setActiveTab("ncj")}
          >
            Projects
          </div>
          <div
            className={`w-full rounded-lg py-3 text-sm font-medium leading-5 text-white flex justify-center items-center  gap-1  cursor-pointer ${
              activeTab === "sec_cj"
                ? "bg-gradient-to-r from-sky-400 to-sky-300 shadow-lg  outline-none"
                : "hover:bg-gradient-to-r from-sky-400 to-sky-300 hover:shadow-inner hover:text-white z-50"
            }`}
            onClick={() => setActiveTab("sec_cj")}
          >
            Components
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          {activeTab === "ncj" && (
            <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8 justify-center items-center container cursor-pointer sm:pb-10">
              {data.map((item, index) => (
                <Card
                  key={index}
                  png={item.img}
                  title={item.title}
                  about={item.about}
                  icons={item.icons}
                  link={item.link}
                />
              ))}
            </div>
          )}

          {activeTab === "sec_cj" && <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8 justify-center items-center container cursor-pointer sm:pb-10 w-full">
              {items.map((item, index) => (
                <Card
                  key={index}
                  png={item.img}
                  title={item.title}
                  about={item.about}
                  icons={item.icons}
                  link={item.link}
                />
              ))}
            </div>}
        </div>
      </div>
    </MasterLayout>
  );
};

export default Index;
