import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { RiInboxArchiveLine } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { MdScheduleSend } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import { GrAnalytics } from "react-icons/gr";
import { LuFiles } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import { FaArrowAltCircleLeft } from "react-icons/fa";


const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: TbLayoutDashboardFilled },
    { title: "Inbox", src: RiInboxArchiveLine },
    { title: "Accounts", src: MdAccountCircle, gap: true },
    { title: "Schedule ", src: MdScheduleSend },
    { title: "Search", src: FcSearch },
    { title: "Analytics", src: GrAnalytics },
    { title: "Files ", src: LuFiles, gap: true },
    { title: "Setting", src: IoSettings },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-52" : "w-20 "
        } bg-purple-400 h-screen p-5  pt-8 relative duration-300`}
      >
        <FaArrowAltCircleLeft
        size={20}
          className={`absolute text-white cursor-pointer -right-3 top-9 border-purple-400 bg-purple-400
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer w-32 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-purple-100 text-gray-300 text-sm items-center gap-1 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <Menu.src size={20} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        {/* <h1 className="text-2xl font-semibold "><NotePad /></h1> */}
      </div>
    </div>
  );
};
export default App;
