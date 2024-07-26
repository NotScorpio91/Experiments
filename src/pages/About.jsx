import React from "react";
import MasterLayout from "../Layouts/MasterLayout";
import img from "../assets/model2.png";
import { SlBadge } from "react-icons/sl";
import { GrCompliance } from "react-icons/gr";
import html from '../assets/Skills/html.png'
import css from '../assets/Skills/css.png'
import js from '../assets/Skills/js.png'
import tailwindcss from '../assets/Skills/tailwind-css.svg'
import sass from '../assets/Skills/sass.png'
import nodejs from '../assets/Skills/nodejs.png'
import react from '../assets/Skills/react.png'
import reactRouter from '../assets/Skills/react-router.png'
import bootstrap from '../assets/Skills/bootstrap.png'
import git from '../assets/Skills/git.png'
import github from '../assets/Skills/github.png'
import redux from '../assets/Skills/redux.png'
import materialui from '../assets/Skills/material-ui.png'
import mysql from '../assets/Skills/mysql.png'
import firebase from '../assets/Skills/firebase.png'
import figma from '../assets/Skills/figma.png'
import framerMotion from '../assets/Skills/framer-motion.svg'
import discordbot from '../assets/Skills/discord.png'
import { FaCode } from "react-icons/fa";

function About() {
   const Icons = [
    {
        img:html,
        title: "HTML",
      },
    {
        img:css,
        title: "CSS",
      },
    {
        img:js,
        title: "Javascript",
      },
    {
        img:tailwindcss,
        title: "Tailwind Css",
      },
    {
        img:sass,
        title: "SASS",
      },
    {
        img:nodejs,
        title: "Nodejs",
      },
    {
        img:react,
        title: "React",
      },
    {
        img:reactRouter,
        title: "React router",
      },
    {
        img:bootstrap,
        title: "Bootstrap",
      },
    {
        img:git,
        title: "Git",
      },
    {
        img:github,
        title: "Github",
      },
    {
        img:redux,
        title: "Redux",
      },
    {
        img:materialui,
        title: "Material ui",
      },
    {
        img:firebase,
        title: "Firebase",
      },
    {
        img:figma,
        title: "Figma",
      },
    {
        img:mysql,
        title: "Mysql",
      },
    {
        img:framerMotion,
        title: "Framer motion",
      },
    {
        img:discordbot,
        title: "Discord bot",
      },
   ];
  return (
    <MasterLayout>
      <div className="flex justify-center items-center mt-16 font-roboto">
        <div
          aria-hidden="true"
          className="absolute inset-0 dark:grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 hidden"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:hidden "
        >
          <div className="blur-[106px] h-36 bg-gradient-to-t from-gray-500 to-gray-50 "></div>
          <div className="blur-[106px] h-36 bg-gradient-to-t from-gray-500 to-gray-50 "></div>
        </div>
        <div className="md:mt-20 mt-12">
          <div className="flex justify-around items-center text-start w-full md:flex-row flex-col-reverse">
            <div className="LHS flex flex-col gap-7 py-4  sm:w-full">
              <h1 className=" text-black text-2xl text-center md:text-start  font-semibold">
                ABOUT ME
              </h1>
              <p className="text-gray-500 sm:text-base md:text-start text-center text-sm ">
              Hi, I'm Scorpio, a Front-End Web Developer with over 1.5 years of experience. I specialize in building responsive, user-friendly web applications that seamlessly integrate with front-end technologies. My expertise includes ReactJS, Tailwind CSS, SASS, NodeJS, Redux, and Firebase. I am proficient in using Git and GitHub for version control and collaboration. Passionate about delivering high-quality code and exceptional user experiences, I continually strive to stay updated with the latest industry trends and best practices.
              </p>
            </div>
            <div className="flex md:justify-end justify-center md:ml-14 w-full md:w-[450px] ">
              <img
                className="w-72 h-72 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 "
                src={img}
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-5 sm:gap-8 md:gap-20 w-full my-20">
            <div className="bg-gray-50 flex flex-col items-center gap-3 rou border p-4 rounded-lg button">
              <SlBadge  size={20}/>
              <p className="text-gray-900 font-bold">Experience</p>
              <p className="text-gray-500 text-xs">1.5+ Years</p>
            </div>
            <div className="bg-gray-50 flex flex-col items-center gap-3 rou border p-4 rounded-lg button">
              <GrCompliance  size={20}/>
              <p className="text-gray-900 font-bold">Completed</p>
              <p className="text-gray-500 text-xs">5+ Projects</p>
            </div>
            <div className="bg-gray-50 flex flex-col items-center gap-3 rou border p-4 rounded-lg button">
              <FaCode  size={20}/>
              <p className="text-gray-900 font-bold">Skills</p>
              <p className="text-gray-500 text-xs">18+</p>
            </div>
            
          </div>
          <h1 className="text-center text-gray-900 font-bold text-5xl mt-10">
            Skills
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-2 w-full mt-6 md:mb-20">
            {Icons.map ((icon,index) =>(
            <div className="flex flex-col gap-1">
              <div className="bg-gray-50 flex justify-center items-center border p-3 ">
                <img className={`w-11 h-11  ${icon.class}`} src={icon.img} alt="skill" />
              </div>
              <p className="text-gray-900  text-sm">{icon.title}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </MasterLayout>
  );
}

export default About;
