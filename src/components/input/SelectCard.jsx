import React from "react";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { Icon } from "../icon/Icon";
export const SelectCard = ({
  placeholder = "select",
  className = "select",
  options = [],
  value = "",
  handelChangeValue,
  resetSelect,
}) => {
  return (
    <div className="wrapper">
      <select
        className={className}
        value={value}
        onChange={(e) => handelChangeValue(e)}
      >
        <option value={""} disabled>
          {placeholder}
        </option>
        {options.map((option, id) => (
          <option value={option} key={id}>
            {option}
          </option>
        ))}
      </select>
      {value && <Icon icon="circleX" size="lg" clickHandelar={resetSelect} />}
    </div>
  );
};
