import React, { ChangeEvent } from "react";

interface AuthInputField {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  name?: string;
}
const ScheduleInputField = ({
  value,
  type,
  placeholder,
  name,
  onChange,
}: AuthInputField) => {
  return (
    <input
      type={type}
      className="h-[50px] w-[470px] border-[1px] rounded-[8px] px-3"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default ScheduleInputField;
