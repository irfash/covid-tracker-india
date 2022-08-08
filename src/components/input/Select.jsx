import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectToggleAZ,
  sortBy,
  toggleAZ,
} from "../../features/data/dataSlice";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { Icon } from "../icon/Icon";
export const Select = ({
  placeholder = "select",
  className = "select",
  keyTerm = "select",
  options = [],
  sortingBtn = true,
}) => {
  const btnState = useSelector(selectToggleAZ);
  const [value, setValue] = useLocalStorage(keyTerm, "");
  const dispatch = useDispatch();

  const resetSelect = () => {
    setValue("");
    dispatch(sortBy(""));
  };

  const handelChangeValue = (e) => {
    setValue(e.target.value);
    dispatch(sortBy(e.target.value));
  };

  const toggleAZZA = () => {
    dispatch(toggleAZ());
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
      {value && sortingBtn && (
        <Icon
          icon={btnState ? "arrowUp" : "arrowDown"}
          size="lg"
          clickHandelar={toggleAZZA}
        />
      )}

      {value && <Icon icon="circleX" size="lg" clickHandelar={resetSelect} />}
    </div>
  );
};
