import React, { useState } from "react";
import MasterLayout from "../Layouts/MasterLayout";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineWeb } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../components/CustomButtons/3dButton/index";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Tooltip from "../components/Tooltip";
function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "notscorpio91@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    // toast.success("Email is Copied!");
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      <MasterLayout>
        <div className="w-full text-center font-roboto md:mt-52 mt-24 ">
          <div className="flex justify-center items-center">
            <div>
              <p className="uppercase text-sm tracking-widest text-gray-600">
                LET&#39;S BUILD SOMETHING TOGETHER
              </p>
              <h1 className="py-2 text-gray-700 text-6xl font-bold">
                Hi, I&#39;m <span className="bg-gradient-to-r from-[#00c6ff] to-[#92EFFD]  text-transparent bg-clip-text antialiased"> Scorpio</span>
              </h1>
              <h1 className="py-2 text-gray-700 text-6xl font-bold">
                A Front-End Web Developer
              </h1>
              <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
                I’m focused on building responsive front-end web applications
                integrating back-end technologies.
              </p>
              <Link to='/projects'>
              <div className="my-14">
              <Button />
              </div>
              </Link>
              <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                <Tooltip position="top" content="Github">
                  <a href="https://github.com/NotScorpio91" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  group">
                      <FaGithub className="group-hover:text-sky-400 ease-in duration-300" />
                    </div>
                  </a>
                </Tooltip>
                <Tooltip position="top" content="Linkedin">
                  <a
                    href="https://www.linkedin.com/in/not-scorpio-32086a29b/"
                    target="blank"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  group">
                      <FaLinkedinIn className="group-hover:text-sky-400 ease-in duration-300" />
                    </div>
                  </a>
                </Tooltip>
                <Tooltip position="top" content="Copy my email">
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  group"
                    onClick={handleCopy}
                  >
                    <MdEmail className="group-hover:text-sky-400 ease-in duration-300" />
                  </div>
                </Tooltip>
                <Tooltip position="top" content="Discord">
                  <a href="https://discord.gg/DXGjYdzgZW" target="blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 group ">
                      <FaDiscord className="group-hover:text-sky-400 ease-in duration-300" />
                    </div>
                  </a>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </MasterLayout>
    </>
  );
}

export default Home;
