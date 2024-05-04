import { TimeSlotProps } from "@/app/constants/types";
import React from "react";

const TimeSlot: React.FC<TimeSlotProps> = ({ time, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[208px] h-[52px] mt-3 ml-4 flex justify-center border-[1px] text-[#0069FF] py-2 border-[#0069FF] rounded-[4px] hover:bg-[#0069FF] hover:text-white transition duration-2000 active:bg-[#006aff87]"
    >
      <p className="font-bold text-[14px]">{time}</p>
    </button>
  );
};

export default TimeSlot;
