import React from "react";
import MasterLayout from "../Layouts/MasterLayout";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <MasterLayout>
        <div className="w-full text-center font-roboto md:mt-44 mt-14">
          <div className="flex justify-center items-center">
            <div>
              <p className="uppercase text-sm tracking-widest text-gray-600">
                LET&#39;S BUILD SOMETHING TOGETHER
              </p>
              <h1 className="py-2 text-gray-700 text-6xl font-bold">
                Hi, I&#39;m <span className="text-sky-700"> Scorpio</span>
              </h1>
              <h1 className="py-2 text-gray-700 text-6xl font-bold">
                A Front-End Web Developer
              </h1>
              <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
                I’m focused on building responsive front-end web applications
                integrating back-end technologies.
              </p>
              <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                <a href="https://theteksol.com/" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <MdOutlineWeb />
                  </div>
                </a>
                <a href="https://github.com/NotScorpio91" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a
                  href="https://pk.linkedin.com/company/theteksol"
                  target="blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://discord.gg/DXGjYdzgZW" target="blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaDiscord />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </MasterLayout>
    </>
  );
}

export default Home;
