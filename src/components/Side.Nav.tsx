"use client";

import Image from "next/image";
import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import magnerIcon from "../../public/magnerIcon.png";

export default function SideNav() {
  const [sideActive, setSideActive] = useState(false);
  function hanldeSideMenu() {
    setSideActive(true);
    console.log("open");
  }

  return (
    <div className="absolute flex items-center w-screen bg-black h-14 ">
      <div className="relative flex">
        <div className="relative grid w-screen place-items-center">
          <Image
            src={magnerIcon}
            width={150}
            height={50}
            alt="Magner Care Logo Png"
          />
        </div>
        <div className="absolute">
          <button onClick={hanldeSideMenu} className="z-50">
            <RiMenu4Fill className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>

      {/* SIDE MENU */}
      <div
        className={`absolute w-3/4 h-screen top-0 bg-white/80 duration-300 text-black ${
          sideActive === true ? "left-0" : "-left-80"
        }`}
      >
        rama
        {/* <div>
          <div className="relative grid w-screen place-items-center">
            <Image
              src={MagnerIcon}
              width={150}
              height={50}
              alt="Magner Care Logo Png"
            />
          </div>
          <div className="absolute">
            <button onClick={hanldeSideMenu} className="z-50">
              <RiMenu4Fill className="w-8 h-8 text-white" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
