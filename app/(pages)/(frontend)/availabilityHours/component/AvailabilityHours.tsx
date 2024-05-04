"use client";
import React from "react";
import Checkbox from "@/app/(components)/checkBox/CheckBox";
import Image from "next/image";
import { hoursTimes } from "@/app/(components)/profileData/ProfileData";
import Link from "next/link";
import { Dropdown } from "@/app/(components)/dropdown/DropDown";
import useAvailabilityHours from "./useAvailabilityHours";
import { ClipLoader } from "react-spinners";
import { progressBar, second, speaker } from "@/app/constants/images";

export default function AvailabilityHours() {
  const {
    handleAvailability,
    handleCheckboxChange,
    setSelectedHour1,
    setSelectedHour2,
    loading,
  } = useAvailabilityHours();

  return (
    <div className="flex justify-center mt-7">
      <div className="w-[645px] h-[587px] ">
        <div className="w-[645px] h-[163px] flex border-[2px] ">
          <div className="w-[457px] h-[163px] px-8 pr-10 py-8">
            <div>
              <p className="text-[18px] font-bold">Set your availability</p>
            </div>
            <div className="mt-4">
              <p className="text-[14px] font-normal">
                Let Calendly know when you’re typically available to accept
                meetings.
              </p>
            </div>
          </div>
          <div className="w-[190px] h-[163px]">
            <Image src={second} className="w-[100%] h-[99%]" alt="Logo" />
          </div>
        </div>
        <div className="w-[645px] h-[302px] py-5 px-6 border-[2px] ">
          <p className="text-[14px] font-bold">Available hours</p>
          <div className="mt-2 w-[595px] h-[46px] flex justify-between">
            <div className="h-[46px] w-[278px] border-[1px] border-[#B2B2B2] rounded-[8px]">
              <Dropdown options={hoursTimes} onSelect={setSelectedHour1} />
            </div>
            <div className="h-[46px] w-[278px] border-[1px] border-[#B2B2B2] rounded-[8px]">
              <Dropdown options={hoursTimes} onSelect={setSelectedHour2} />
            </div>
          </div>

          <p className="text-[14px] mt-5 font-bold">Available days</p>
          <div className="mt-2 w-[595px] h-[60px] flex border-[1px] border-[#DADADA] rounded-[8px]">
            <div className="w-[86px] h-[60px] rounded-s-md border-[1px]">
              <Checkbox label={"Sundays"} onChange={handleCheckboxChange} />
            </div>
            <div className="w-[86px] h-[60px] rounded-s-md border-[1px]">
              <Checkbox label={"Mondays"} onChange={handleCheckboxChange} />
            </div>
            <div className="w-[86px] h-[60px] rounded-s-md border-[1px]">
              <Checkbox label={"Tuesdays"} onChange={handleCheckboxChange} />
            </div>
            <div className="w-[86px] h-[60px] rounded-s-md border-[1px]">
              <Checkbox label={"Wednesdays"} onChange={handleCheckboxChange} />
            </div>
            <div className="w-[86px] h-[60px] rounded-s-md border-[1px]">
              <Checkbox label={"Thursdays"} onChange={handleCheckboxChange} />
            </div>
            <div className="w-[86px] h-[60px] rounded-s-md border-[1px]">
              <Checkbox label={"Fridays"} onChange={handleCheckboxChange} />
            </div>
            <div className="w-[86px] h-[60px] rounded-s-md border-[1px]">
              <Checkbox label={"Saturdays"} onChange={handleCheckboxChange} />
            </div>
          </div>
          <div className="mt-12 w-[595px] h-[24px] gap-2 flex justify-center">
            <div>
              <Image src={speaker} alt="speaker" />
            </div>
            <div>
              <p className="text-[14px] font-normal text-[#1A1A1A]">
                Don’t worry! You’ll be able to further customize your
                availability later on.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 items-center w-[645px] flex justify-between h-[44px]">
          <div className="h-[10px] w-[100px">
            {" "}
            <Image src={progressBar} className="w-[100%] h-[100%]" alt="Logo" />
          </div>
          <div className="flex gap-2">
            <div className="flex justify-center">
              <Link
                href={"/sidebar"}
                className="h-[44px] border-[grey] text-center flex items-center justify-center px-3 text-[13px] font-medium "
              >
                Set up later
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleAvailability}
                className="h-[44px] w-[80px] border-[#0069FF] bg-[#0069FF] text-center flex items-center text-white justify-center rounded-[32px] px-3 border-[1px] text-[13px] font-bold "
              >
                {loading ? (
                  <ClipLoader
                    color={"white"}
                    loading={loading}
                    size={25}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  <>Continue</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
