import { CheckboxProps } from "@/app/constants/types";
import React, { useState } from "react";

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onChange(label, checked);
  };

  return (
    <div className="flex flex-col items-center py-3">
      <input
        id={label}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="w-[16px] h-[16px] text-[#0069FF] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-opacity-50"
      />
      <label
        htmlFor={label}
        className="ml-2 mt-2 text-[11px] font-normal text-gray-700"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
