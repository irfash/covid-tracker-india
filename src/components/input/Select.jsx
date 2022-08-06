import React from "react";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { Icon } from "../icon/Icon";
export const Select = ({
  placeholder = "select",
  className = "select",
  keyTerm = "select",
  options = [],
  sortingBtn = true,
}) => {
  const [value, setValue] = useLocalStorage(keyTerm, "");

  const resetSelect = () => {
    setValue("");
  };

  const handelChangeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
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
      {value && sortingBtn && <Icon icon="arrowUp" size="lg" />}

      {value && <Icon icon="circleX" size="lg" clickHandelar={resetSelect} />}
    </div>
  );
};
