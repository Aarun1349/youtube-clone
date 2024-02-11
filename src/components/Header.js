import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMicrophone } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { TbVideoPlus } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import youTubeLogo from "../image/youtube-premium-logo.webp";
import avatar from "../image/avatar.png";
const Header = () => {
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  let placeholder = showSearchIcon ? "pl-24" : "pl-12";
  return (
    <div className="flex h-20 justify-between ">
      <div className=" flex justify-between m-2">
        <button className="text-2xl m-[10px]  rounded-full p-[10px] mr-4  hover:bg-slate-200    ">
          <RxHamburgerMenu />
        </button>
        <img className="w-3/4" src={youTubeLogo} alt="youtube-premium" />
      </div>

      <div className="flex justify-between py-4 rounded-left-12 px-4">
        <form className="flex justify-between">
          <button
            className={`text-2xl px-4 rounded-l-full bg-white absolute top-7 ml-4 z-50`}
          >
            {showSearchIcon && <CiSearch className="ml-2" />}
          </button>
          <input
            type="text"
            className={`border  text-xl rounded-s-full  pr-24 w-[720px]  hover:border-blue-700 active:hover:border-cyan-700 ${placeholder}`}
            placeholder="Search"
            onMouseEnter={() => {
              setShowSearchIcon(true);
            }}
            onMouseLeave={() => {
              setShowSearchIcon(false);
            }}
          ></input>
          <button className="text-xl px-4 rounded-r-full hover:bg-slate-200 bg-slate-100">
            <CiSearch />
          </button>
          <button className="text-xl p-4 rounded-full bg-slate-100 hover:bg-slate-200 ml-4">
            <FaMicrophone />
          </button>
        </form>
      </div>

      <div className="flex justify-between ">
        <button className="text-2xl m-3  rounded-full  p-4 hover:bg-slate-200 bg-slate-100">
          <TbVideoPlus />
        </button>

        <button className="text-2xl m-3 rounded-full  p-4 hover:bg-slate-200 bg-slate-100">
          <CiBellOn />
        </button>
        <img src={avatar} className="rounded-full m-3 " alt="user_avatar" />
      </div>
    </div>
  );
};

export default Header;
