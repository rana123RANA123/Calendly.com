"use client";
import React from "react";
import { image } from "@/app/constants/images";
import Image from "next/image";
import useForgotConfirm from "./useForgotConfirm";

export default function Page() {
  const { handleForgotPassword, password, setPassword } = useForgotConfirm();

  return (
    <div className="flex mt-28 justify-center">
      <div className="w-[440px] h-[580px] ">
        <div className="flex justify-center">
          <Image src={image} className="w-[182px] h-[43px]" alt="Logo" />
        </div>
        <div className="flex text-center justify-center">
          <p className="font-bold text-[20px] text-[#1A1A1A] leading-7">
            Forgot Password with Calendly for <br /> free
          </p>
        </div>
        <div className="max-w-[440px] h-[320px] border-[1px] border-[#DADADA] rounded-[6px] p-[24px]">
          <div>
            <p className="font-bold text-[14px] leading-6">
              Enter New Password
            </p>
          </div>
          <div className="mt-2">
            <input
              type="password"
              className="w-[374px] h-[46px] border-[1px] border[#B2B2B2] rounded-[8px] px-4"
              placeholder="Email"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="h-[6px] w-[374px] rounded-[8px] mt-2 bg-[#F2F2F2]"></div>
          <div className="mt-2 mx-6">
            <p className="text-[#C84545] md:text-start text-center text-[12px] font-normal leading-5">
              Use a few words, avoid common phrases <br /> No need for symbols,
              digits, or uppercase letters
            </p>
          </div>
          <div className="mt-3 mr-3">
            <p className="text-[#1A1A1A] text-[12px] text-center font-normal leading-5">
              By creating a Calendly account, you agree to Calendly's Terms and
              Privacy Policy
            </p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              onClick={handleForgotPassword}
              className="h-[44px] bg-[#0069FF] border-[#0069FF] text-center flex items-center justify-center rounded-[32px] w-[132px] border-[1px] text-white text-[12px] font-bold "
            >
              Forgot Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
