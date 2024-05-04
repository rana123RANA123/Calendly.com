import React, { useState } from "react";
import Image from "next/image";
import SignUp from "./component/SignUp";
import { image } from "@/app/constants/images";

export default function Page() {
  return (
    <div className="flex mt-5 justify-center">
      <div className="w-[440px] h-[580px] ">
        <div className="flex justify-center">
          <Image src={image} className="w-[182px] h-[43px]" alt="Logo" />
        </div>
        <div className="flex text-center justify-center">
          <p className="font-bold text-[20px] text-[#1A1A1A] leading-7">
            Sign up with Calendly for <br /> free
          </p>
        </div>
        <SignUp />
      </div>
    </div>
  );
}
