import React, { useState } from "react";
import COD from "../assets/images/cod.svg";
import { FaLocationArrow } from "react-icons/fa6";
import { TbArrowBadgeDownFilled } from "react-icons/tb";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div className="bg-transparent px-2 md:px-3 py-2 z-10 fixed top-0 w-full">
      <div className="bg-transparent border-gray-200/20 border rounded-lg px-3 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4 md:gap-8">
          <img
            className="w-32 md:w-44 h-auto invert brightness-0"
            src={COD}
            alt="Call of Duty Logo"
          />
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <a
              href="https://www.callofduty.com/store/games"
              target="_blank"
              rel="noopener noreferrer"
              className='text-black flex items-center justify-center gap-2 text-[10px] sm:text-xs font-bold font-["thinn"] bg-white px-4 py-1.5 rounded-full tracking-wide'
            >
              GAMES <TbArrowBadgeDownFilled className="text-[12px]" />
            </a>
            <div className="relative group inline-block">
              <p className='text-black text-[10px] sm:text-xs font-bold font-["thinn"] bg-white px-4 py-1.5 rounded-full tracking-wide'>
                ESPORTS
              </p>
              <div className='bg-gray-300 h-30 p-1 gap-1 rounded-lg font-["thinn"] flex flex-col w-55 absolute top-8 left-0 hidden group-hover:flex'>
                <a
                  className="rounded-sm hover:border px-2 text-xs h-1/3 flex items-center gap-10 transition-all duration-300 ease-in-out"
                  href="https://www.callofdutyleague.com/en-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CALL OF DUTY LEAGUE{" "}
                  <FaLocationArrow className="text-[10px]" />
                </a>
                <a
                  className="rounded-sm hover:border px-2 text-xs h-1/3 flex gap-10 items-center"
                  href="https://www.callofduty.com/mobile/esports"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CALL OF DUTY MOBILE <br /> WORLD CHAMPIONSHIP{" "}
                  <FaLocationArrow className="text-[10px]" />
                </a>
                <a
                  className="rounded-sm hover:border px-2 text-xs h-1/3 flex gap-3 items-center"
                  href="https://callofduty.worldseriesofwarzone.com/resurgence"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WORLD SERIES OF WARZONE{" "}
                  <FaLocationArrow className="text-[10px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <p
            onClick={() => setmenuOpen(true)}
            className="block cursor-pointer md:hidden"
          >
            <HiOutlineMenuAlt4 className="text-[20px] text-white" />
          </p>
          <a
            href="https://www.callofduty.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="p_tag"
          >
            NEWS <FaLocationArrow className="text-[10px]" />
          </a>
          <a
            href="https://www.callofduty.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="p_tag"
          >
            STORE <FaLocationArrow className="text-[10px]" />
          </a>
          <a
            href="https://support.activision.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p_tag"
          >
            SUPPORT <FaLocationArrow className="text-[10px]" />
          </a>
        </div>

        {menuOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 md:hidden">
            <div className="flex flex-col px-5 py-6 text-white gap-6 text-xl">
              {/* Close Button */}
              <p
                onClick={() => setmenuOpen(false)}
                className="self-end mb-20"
              >
                <AiOutlineClose className="text-white text-[25px]"/>
              </p>
              <a href="https://www.callofduty.com/blog"  className="font-['zentry'] text-8xl text-white flex items-center justify-between">NEWS<FaLocationArrow className="text-[15px]"/> </a>
              <a href="https://www.callofduty.com/store "className="font-['zentry'] text-8xl text-white flex items-center justify-between">STORE<FaLocationArrow className="text-[15px]"/></a>
              <a href="https://support.activision.com/ "className="font-['zentry'] text-8xl text-white flex items-center justify-between">SUPPORT<FaLocationArrow className="text-[15px]"/></a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
