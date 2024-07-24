import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MasterLayout = ({ children }) => {


    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center ">
                <div className="flex flex-col justify-between items-center text-center w-full gap-4 xl:pb-4 pb-24 px-4  xl:px-16 min-h-screen">
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    );
};
export default MasterLayout;
