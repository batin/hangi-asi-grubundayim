import React from "react";
import DropdownIcon from "../../Assets/dropdown-item.svg";
import { useTheme } from "../../Context/Theme";
import "./style.scss";

const Select = ({ options, value = -1, setValue, firstValue }) => {
  const { theme } = useTheme();

  return (
    <div style={theme.select} className="select-wrapper xl">
      <select
        style={theme.select}
        className="select"
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        {value === -1 && firstValue}
        {options && Array.isArray(options) &&
          options.map((option) => {
            return (
              <option key={option.type} value={option.type}>
                {option.type}
              </option>
            );
          })}
      </select>
      <div className="dropdown-wrapper">
        <img className="dropdown-icon" src={DropdownIcon} alt="Dropdown Icon" />
      </div>
    </div>
  );
};

export { Select };
