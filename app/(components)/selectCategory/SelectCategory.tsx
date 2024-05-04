import React from "react";
import Image from "next/image";
import { down2 } from "@/app/constants/images";

interface Props {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  handleImageClick: () => void;
}

const SelectCategory: React.FC<Props> = ({
  selectedCategory,
  setSelectedCategory,
  handleImageClick,
}) => {
  return (
    <div className="flex gap-3 mt-4">
      <div
        className={`h-[48px] w-[89px] border-b-[3px] ${
          selectedCategory === "upcoming"
            ? "border-blue-600"
            : "cursor-pointer hover:border-blue-600"
        } items-center flex justify-center`}
        onClick={() => setSelectedCategory("upcoming")}
      >
        <p className="text-[15px] font-normal">Upcoming</p>
      </div>
      <div
        className={`h-[48px] w-[89px] border-b-[3px] ${
          selectedCategory === "pending"
            ? "border-blue-600"
            : "cursor-pointer hover:border-blue-600"
        } items-center flex justify-center`}
        onClick={() => setSelectedCategory("pending")}
      >
        <p className="text-[15px] font-normal">Pending</p>
      </div>
      <div
        className={`h-[48px] w-[89px] border-b-[3px] ${
          selectedCategory === "past"
            ? "border-blue-600"
            : "cursor-pointer hover:border-blue-600"
        } items-center flex justify-center`}
        onClick={() => setSelectedCategory("past")}
      >
        <p className="text-[15px] font-normal">Past</p>
      </div>
      <div
        className={`h-[48px] w-[129px] flex border-b-[3px] ${
          selectedCategory === "dateRange"
            ? "border-blue-600"
            : "cursor-pointer hover:border-blue-600"
        } items-center flex justify-center`}
        onClick={() => setSelectedCategory("dateRange")}
      >
        <p className="text-[15px] w-[110px] items-center gap-3 flex font-normal">
          Date Range{" "}
          <span onClick={handleImageClick} className="cursor-pointer">
            <Image src={down2} className="h-[12px] w-[12px]" alt="" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default SelectCategory;
