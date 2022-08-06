import React from "react";
import { useSelector } from "react-redux";
import { selectFTStamp } from "./timeStampSlice";

export const TimeStamp = () => {
  const fTimeStamp = useSelector(selectFTStamp);
  return (
    <div>
      {Object.keys(fTimeStamp).map((key, id) => {
        console.log(key);
        return <div key={id}>{key}</div>;
      })}
    </div>
  );
};
