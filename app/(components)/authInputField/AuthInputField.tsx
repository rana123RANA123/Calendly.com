import { AuthInputFieldd } from "@/app/constants/types";
import React, { ChangeEvent } from "react";

const AuthInputField = ({
  value,
  type,
  placeholder,
  name,
  onChange,
}: AuthInputFieldd) => {
  return (
    <input
      type={type}
      className="w-[374px] h-[46px] border-[1px] border[#B2B2B2] rounded-[8px] px-4 pr-10"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default AuthInputField;
