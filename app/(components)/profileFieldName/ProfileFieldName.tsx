import Image from "next/image";
import React from "react";
import i from "../../../public/profile/i.png";

interface HeadingName {
  headingName: string;
}

export default function ProfileFieldName({ headingName }: HeadingName) {
  return (
    <div className="flex gap-2 items-center">
      <p className="font-bold text-[16px]">{headingName}</p>
      <Image src={i} className="h-3 w-3" alt="i" />
    </div>
  );
}
