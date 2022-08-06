import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchDate } from "../../features/data/dataSlice";
import { filterStates } from "../../features/states/statesSlice";
import { fTimeStamp } from "../../features/timeStamp/timeStampSlice";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { Icon } from "../icon/Icon";

export const Date = () => {
  const dispatch = useDispatch();
  const [tempDate, setTempDate] = useState(
    JSON.parse(localStorage.getItem("date")) || "",
  );
  const [date, setDate, removeDate] = useLocalStorage("date", "");

  const resetDate = () => {
    setDate("");
    setTempDate("");
    dispatch(setSearchDate(""));
    dispatch(filterStates());
    dispatch(fTimeStamp());
  };
  const handelChange = (value) => {
    setTempDate(value);
  };
  const filter = () => {
    if (tempDate !== "") {
      setDate(tempDate);
      dispatch(setSearchDate(tempDate));
      dispatch(fTimeStamp(tempDate));
    }
  };
  return (
    <>
      <input
        type="date"
        value={tempDate === undefined ? "" : tempDate}
        onChange={({ target }) => handelChange(target.value)}
      />
      <Icon icon="search" size="lg" clickHandelar={filter} />
      {tempDate && <Icon icon="circleX" size="lg" clickHandelar={resetDate} />}
    </>
  );
};
