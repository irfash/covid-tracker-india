import React, { useEffect, useState } from "react";

import { STATE_NAMES } from "../../constant";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { SelectCard } from "../input/SelectCard";
import { CardContent } from "./CardContent";
// --------------------------------------------------------------------
export const Card = ({ stateCode, feald, nav = true }) => {
  // const [value, setValue] = useLocalStorage(
  //   stateCode,
  //   localStorage.getItem(stateCode) || "",
  // );

  // const districts = () => {
  //   if (feald.districts !== undefined) {
  //     console.log(Object.keys(feald.districts));
  //     return Object.keys(feald.districts);
  //   } else {
  //     console.log(feald.districts);
  //     console.log(stateCode);
  //     return ["Tami Nadu"];
  //   }
  // };

  // const setFealds = (feald) => {
  //   const ini = {};
  //   ini["delta"] = feald?.delta || {};
  //   ini["delta7"] = feald?.delta7 || {};
  //   ini["total"] = feald?.total || {};
  //   return ini;
  // };

  // const setDest = () => {
  //   const data = feald.districts[value];
  //   return setFealds((feald = data));
  // };
  // const [content, setContent] = useState(
  //   value === "" ? setFealds(feald) : setDest(),
  // );

  // const handelChangeValue = ({ target }) => {
  //   setValue(target.value);
  // };
  // const resetSelect = () => {
  //   setValue("");
  //   setContent(feald);
  // };

  const [value, setValue] = useLocalStorage(
    stateCode,
    localStorage.getItem(stateCode) || "",
  );
  const districts =
    feald.districts !== undefined ? Object.keys(feald.districts) : [];
  const [content, setContent] = useState(feald);

  const getContent = (content) => {
    const ini = {};
    ini["delta"] = content?.delta || {};
    ini["delta7"] = content?.delta7 || {};
    ini["total"] = content?.total || {};
    console.log("ini");
    console.log(content);
    return ini;
  };

  const handelChangeValue = (e) => {
    setValue(e.target.value);
    setContent(getContent(feald.districts[e.target.value]));
  };
  const resetSelect = () => {
    setValue("");
    setContent(getContent(feald));
  };
  return (
    <div className="card">
      <div className="card__header">
        <div>{STATE_NAMES[stateCode]}</div>
        {nav && (
          <SelectCard
            handelChangeValue={handelChangeValue}
            value={value}
            keyTerm={stateCode}
            placeholder="Destricts"
            options={districts}
            resetSelect={resetSelect}
          />
        )}
      </div>
      <hr />
      {console.log(content)}
      <CardContent {...content} />
    </div>
  );
};
