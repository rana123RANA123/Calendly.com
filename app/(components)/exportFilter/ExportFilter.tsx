import Image from "next/image";
import React from "react";
import down from "../../../public/icons/down.png";
import exportt from "../../../public/icons/export.png";
import filterNew from "../../../public/icons/filterNew.png";

export default function ExportFilter() {
  return (
    <div className="flex gap-2">
      <div className="flex gap-2 bg- border-[1px] border-black px-3 py-2 rounded-full ">
        <div>
          <Image src={exportt} className="h-[16px] w-[16px]" alt="" />
        </div>
        <div>
          <p className="font-normal text-[12px]">Export</p>
        </div>
      </div>
      <div className="flex gap-2 border-[1px] border-black px-3 py-2 rounded-full ">
        <div>
          <Image src={filterNew} className="h-[16px] w-[16px]" alt="" />
        </div>
        <div>
          <p className="font-normal text-[12px]">Filter</p>
        </div>
        <div>
          <Image src={down} className="h-[16px] w-[16px]" alt="" />
        </div>
      </div>
    </div>
  );
}
