import { selectOptions } from "@testing-library/user-event/dist/types/utility";
import React from "react";
import { useLocalStorage } from "../hook/useLocalStorage";

export const Select = ({ placeholder, code, options, local = true }) => {
  const [value, setValue, rest] = useLocalStorage(code, "");
  const handelChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <select value={value} onChange={(e) => handelChange(e)}>
      <option disabled>{}</option>
      {options.map((option, id) => (
        <option value={option} key={id}>
          {option}
        </option>
      ))}
    </select>
  );
};
