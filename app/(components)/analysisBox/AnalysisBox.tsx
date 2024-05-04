import { AnalysisBoxx } from "@/app/constants/types";
import React from "react";

const AnalysisBox: React.FC<AnalysisBoxx> = ({ boxName, total }) => {
  return (
    <div className="h-[200px] py-3 px-3 pt-4 w-[20%] shadow-2xl">
      <div>
        <p className="text-[20px] font-bold">{boxName}</p>
      </div>
      <div className="my-3 mx-3">
        <p className="text-[34px] font-extrabold">{total}</p>
      </div>
      <div className="text-gray-400">
        <p>+0 (no change)</p>
      </div>
      <div className="my-2">
        <p className="text-gray-400">VS prior 30 days</p>
      </div>
    </div>
  );
};

export default AnalysisBox;
