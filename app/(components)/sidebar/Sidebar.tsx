"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SidebarProps } from "@/app/constants/types";
import {
  adminCenter,
  analysis,
  avaibility,
  logo2,
  openClose,
  scheduleHome,
  singleLogo,
} from "@/app/constants/images";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";
  return (
    <aside
      className={` min-h-screen py-6 px-4 flex flex-col justify-between border-[1px] border-gray-300 fixed top-0 left-0 transition-width duration-200 ease-in-out ${
        isOpen ? "w-[17%]" : "w-[5%]"
      }`}
    >
      <div>
        <div className="flex justify-between items-center">
          <div>
            <Image
              src={logo2}
              className={`h-[40px] w-[150px] ${!isOpen && "hidden"}`}
              alt=""
            />

            <Image
              onClick={onClose}
              src={singleLogo}
              className={`h-[100%] w-[100%] ml-1 cursor-pointer ${
                isOpen && "hidden"
              }`}
              alt=""
            />
          </div>
          <div onClick={onClose} className={`${!isOpen && "hidden"}`}>
            <Image src={openClose} className="h-4 w-4" alt="" />
          </div>
        </div>
        <div className={` flex items-center gap-2 mt-10 ${!isOpen && "mt-12"}`}>
          <p className="text-white bg-[#0069FF] w-[100%] items-center justify-center py-2 rounded-full border-[1px] font-medium flex gap-2 text-[18px]">
            <span>+</span>
            <span className={`${!isOpen && "hidden"}`}>Create</span>
          </p>
        </div>

        <Link
          href={"/sidebar"}
          className={`flex mt-6 py-2 gap-3 flex-row cursor-pointer px-3 w-[100%] h-[44px] items-center ${
            pathname === "/sidebar" ? "bg-[#F2F8FF]" : ""
          }`}
        >
          <div>
            <Image src={scheduleHome} className="w-4 h-4" alt="" />
          </div>
          <div className={`${!isOpen && "hidden"}`}>
            <p className="text-[#0069FF] font-bold text-[14px]">
              Schedule Event
            </p>
          </div>
        </Link>
        <Link
          href={"/analysis"}
          className={`flex mt-6 py-2 gap-3 flex-row hover:bg-[#F2F8FF] cursor-pointer px-3 w-[100%] h-[44px] items-center ${
            pathname === "/analysis" ? "bg-[#F2F8FF]" : ""
          }`}
        >
          <div>
            <Image src={analysis} className="w-4 h-4" alt="" />
          </div>
          <div className={`${!isOpen && "hidden"}`}>
            <p className=" font-bold text-[14px]">Analysis</p>
          </div>
        </Link>
      </div>
      <div>
        <Link
          href={"/availabilityHours"}
          className={`flex mt-6 py-2 gap-3 flex-row hover:bg-[#F2F8FF] cursor-pointer px-3 w-[100%] h-[44px] items-center ${
            pathname === "/availabilityHours" ? "bg-[#F2F8FF]" : ""
          }`}
        >
          <div>
            <Image src={avaibility} className="w-4 h-4" alt="" />
          </div>
          <div className={`${!isOpen && "hidden"}`}>
            <p className=" font-bold text-[14px]">Availability</p>
          </div>
        </Link>
        <div className=" flex mt-2 py-2 gap-3 flex-row hover:bg-[#F2F8FF] cursor-pointer px-3 w-[100%] h-[44px] items-center">
          <div>
            <Image src={adminCenter} className="w-4 h-4" alt="" />
          </div>
          <div className={`${!isOpen && "hidden"}`}>
            <p className=" font-bold text-[14px]">Admin center</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
