"use client";
import React, { useState } from "react";
import { Dropdown } from "../dropdown/DropDown";
import { DropdownData } from "../profileData/ProfileData";

export default function SidebarSecondMenu() {
  const [selectedHour, setSelectedHour] = useState<string | null>(null);

  return (
    <>
      <div className="h-full w-[45%] py-4">
        <div className="mt-4">
          <p className="font-semibold text-[25px] leading-7">
            Scheduled events
          </p>
        </div>
      </div>

      <div className="flex mt-9 h-[60px] justify-between">
        <div className="h-[46px] w-[151px] border-[1px] text-[14px] font-normal border-gray-300 rounded-md mt-2">
          <Dropdown
            options={DropdownData}
            onSelect={(option) => setSelectedHour(option)}
          />
        </div>
        <div className="flex items-center gap-3">
          <p className="font-normal text-[14px] text-gray-500">
            Displaying 1 of 1 Events
          </p>
        </div>
      </div>
    </>
  );
}
