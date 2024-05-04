import { DropdownProps } from "@/app/constants/types";

export const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  return (
    <select
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        border: "1px ",
        paddingLeft: "10px",
      }}
      onChange={(e) => onSelect(e.target.value)}
    >
      {options.map((option, onSelect) => (
        <option key={onSelect} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
