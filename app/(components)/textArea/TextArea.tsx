import React, { ChangeEvent } from "react";

interface AuthInputField {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  type?: string;
  placeholder?: string;
  rows: number;
  cols: number;
  name?: string;
}
const TextArea = ({
  value,
  placeholder,
  name,
  rows,
  cols,
  onChange,
}: AuthInputField) => {
  return (
    <textarea
      className="w-[470px] border-[1px] rounded-[8px] py-2 px-3"
      placeholder={placeholder}
      value={value}
      rows={rows}
      cols={cols}
      name={name}
      onChange={onChange}
    />
  );
};

export default TextArea;
