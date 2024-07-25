import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MasterLayout = ({ children }) => {


    return (
        <>
        <div 
                aria-hidden="true"
                className="absolute inset-0 dark:grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 hidden">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <div 
                aria-hidden="true"
                className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:hidden  ">
                <div className="blur-[106px] h-36 bg-gradient-to-t from-gray-500 to-gray-50 "></div>
                <div className="blur-[106px] h-36 bg-gradient-to-t from-gray-500 to-gray-50 "></div>
            </div>
            <Navbar />
            <div className="flex justify-center items-center ">
                <div className="flex flex-col justify-between items-center text-center w-full gap-4 xl:pb-4 pb-24 px-4  xl:px-16 min-h-screen 2xl:w-[1800px]">
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    );
};
export default MasterLayout;
