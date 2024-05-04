import { link } from "@/app/constants/images";
import Image from "next/image";
import React from "react";
export default function MenuHeader() {
  return (
    <div className="bg-white shadow-lg h-[60px] flex justify-center">
      <div className=" w-[60%] flex justify-between items-center">
        <div></div>
        <div className="flex gap-4">
          <div className="flex gap-3 items-center">
            Menu{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7 7 7-7"
                />
              </svg>
            </span>
          </div>
          <div>
            <button className="h-[44px] gap-2 border-[grey] text-center flex items-center justify-center rounded-[32px] px-6 border-[1px] text-[12px] font-bold ">
              <Image src={link} alt="Link" />
              Copy link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
