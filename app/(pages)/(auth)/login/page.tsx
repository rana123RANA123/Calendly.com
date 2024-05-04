import React from "react";
import Image from "next/image";
import Login from "./component/Login";
import { image } from "@/app/constants/images";

export default function LoginPage() {
  return (
    <div className="flex mt-20 justify-center">
      <div className="w-[440px] h-[580px] ">
        <div className="flex justify-center">
          <Image src={image} className="w-[182px] h-[43px]" alt="Logo" />
        </div>
        <div className="flex text-center justify-center">
          <p className="font-bold text-[20px] text-[#1A1A1A] leading-7">
            Login with Calendly for <br /> free
          </p>
        </div>
        <Login />
      </div>
    </div>
  );
}
