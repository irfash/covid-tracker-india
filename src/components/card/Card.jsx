import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { STATE_NAMES } from "../../constant";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { useLogger } from "../../hook/useLogger";
import { SelectCard } from "../input/SelectCard";
import { CardContent } from "./CardContent";
// --------------------------------------------------------------------
export const Card = ({ stateCode, feald }) => {
  // const districtsNames = useSelector(({ states }) => {
  //   return states.fStates[stateCode].districts
  //     ? Object.keys(states.fStates[stateCode].districts)
  //     : undefined;
  // });

  // const [localDistrict, setLocalDistrict] = useLocalStorage(
  //   stateCode,
  //   localStorage.getItem(stateCode) || "",
  // );
  // const [district, setDistrict] = useState(
  //   localStorage.getItem(stateCode) || "",
  // );

  // const stateFields = useSelector(({ states }) => {
  //   const { delta = {}, delta7 = {}, total = {} } = states.fStates[stateCode];
  //   return { delta, delta7, total };
  // });

  // const districtFields = useSelector(({ states }) => {
  //   const init = {};
  //   if (states.fStates[stateCode].district) {
  //     Object.keys(states.fStates[stateCode].district).map((district) => {
  //       const {
  //         delta = {},
  //         delta7 = {},
  //         total = {},
  //       } = states.fStates[stateCode].district[district];
  //       init[district] = { delta, delta7, total };
  //       return null;
  //     });
  //   }
  //   console.log(JSON.stringify(init));
  //   return init;
  // });
  // const [fieldData, setFieldData] = useState(stateFields);
  // const handelDistrictchange = (e) => {
  //   setLocalDistrict(e.target.value);
  //   setFieldData(districtFields[localDistrict]);
  // };
  // const resetState = () => {
  //   setLocalDistrict("");
  //   // setFieldData(stateFields);
  //   setFieldData(stateFields);
  // };

  // const conte = () => {
  //   return localDistrict === "" ? districtFields[localDistrict] : stateFields;
  // };

  const [value, setValue] = useLocalStorage(
    stateCode,
    localStorage.getItem(stateCode) || "",
  );
  const districts =
    feald.districts !== undefined ? Object.keys(feald.districts) : [];

  const getContent = (content) => {
    const ini = {};
    ini["delta"] = content?.delta || {};
    ini["delta7"] = content?.delta7 || {};
    ini["total"] = content?.total || {};
    return ini;
  };
  const [content, setContent] = useState(getContent(feald));

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
      <Link to="/State" className="card-nav"></Link>
      <div className="card__header">
        <div>{STATE_NAMES[stateCode]}</div>

        <SelectCard
          handelChangeValue={handelChangeValue}
          value={value}
          keyTerm={stateCode}
          placeholder="Destricts"
          options={districts}
          resetSelect={resetSelect}
        />
      </div>
      <hr />

      <CardContent {...content} />
    </div>
  );
};
