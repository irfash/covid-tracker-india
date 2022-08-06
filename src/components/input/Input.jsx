import React from "react";
import { useDispatch } from "react-redux";
import { filterCode, setSearchTerm } from "../../features/data/dataSlice";
import { filterStates } from "../../features/states/statesSlice";
import { fTimeStamp } from "../../features/timeStamp/timeStampSlice";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { Icon } from "../icon/Icon";

export const Input = ({
  keyTerm,
  className = "input",
  placeholder = "",
  initialValue = "",
}) => {
  const [input, setInput] = useLocalStorage(keyTerm, initialValue);
  const resetInput = () => {
    handelChangeInput("");
  };
  const handelChangeInput = (value) => {
    setInput(value);
    dispatch(setSearchTerm(value));
    dispatch(filterCode());
    dispatch(filterStates());
    if (localStorage.getItem("date")) {
      console.log("ia m");
      dispatch(fTimeStamp(JSON.parse(localStorage.getItem("date"))));
    }
  };
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        className={className}
        value={input === undefined ? "" : input}
        placeholder={placeholder}
        onChange={({ target }) => handelChangeInput(target.value)}
      />
      {input.length > 0 && (
        <Icon icon="circleX" size="lg" clickHandelar={resetInput} />
      )}
    </div>
  );
};
