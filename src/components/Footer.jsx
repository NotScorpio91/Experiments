import React, { useState } from "react";
import { FaGithub, FaDiscord, FaLinkedinIn } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { MdEmail } from "react-icons/md";

function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "notscorpio91@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Email is Copied!");
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
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-full gap-12 2xl:w-[1440px]">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Not Scorpio
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          <a href="https://github.com/NotScorpio91" target="_blank">
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border  group">
              <FaGithub
                className="group-hover:text-sky-400 ease-in duration-300"
                size={20}
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/not-scorpio-32086a29b/"
            target="blank"
          >
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border  group">
              <FaLinkedinIn
                className="group-hover:text-sky-400 ease-in duration-300"
                size={20}
              />
            </div>
          </a>
          <div
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border  group"
            onClick={handleCopy}
          >
            <MdEmail
              className="group-hover:text-sky-400 ease-in duration-300"
              size={20}
            />
          </div>
          <a href="https://discord.gg/DXGjYdzgZW" target="blank">
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border  group">
              <FaDiscord
                className="group-hover:text-sky-400 ease-in duration-300"
                size={20}
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
