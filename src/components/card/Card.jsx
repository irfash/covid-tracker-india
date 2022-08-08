import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { STATE_NAMES } from "../../constant";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { Icon } from "../icon/Icon";
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
  const stateName = STATE_NAMES[stateCode];
  const [value, setValue] = useLocalStorage(
    stateCode,
    localStorage.getItem(stateCode) || "",
  );
  const [districts, setDistricts] = useState(
    feald.districts !== undefined ? Object.keys(feald.districts) : [],
  );
  // const districts =
  const formatContent = (old) => {
    const newValue = {};
    newValue["delta"] = old?.delta || {};
    newValue["delta7"] = old?.delta7 || {};
    newValue["total"] = old?.total || {};
    return newValue;
  };

  const [content, setContent] = useState();

  const handelChangeValue = (e) => {
    setValue(e.target.value);
    // setContent(formatContent(feald.districts[e.target.value]));
  };
  const resetSelect = () => {
    setValue("");
    // setContent(formatContent(feald));
  };

  // ---
  // const data = [
  //   { Total: content.total },
  //   { Delta: content.delta },
  //   { Delta7: content.delta7 },
  // ];

  // const [index, setIndex] = useState(0);
  // const range = data.length;
  // const title = Object.keys(data[index]);
  // const val = data[index][title];

  // ---

  useEffect(() => {
    if (value === "") {
      setContent((content) => formatContent(feald));
    } else {
      setContent((content) => formatContent(feald.districts[value]));
    }
  }, [feald, value]);
  return (
    <div className="card">
      <Link to="/State" className="card-nav"></Link>
      <div className="card__header">
        <div>{stateName}</div>

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
      {/* {console.log(content)} */}
      {console.log(`card -> ${stateCode}  -> ${stateName} feald`)}
      {console.log(feald)}
      {console.log(`card -> ${stateCode}  -> ${stateName} content`)}
      {console.log(content)}
      <CardContent {...content} />
      {/* <div>
        <h3>{title}</h3>
        {index < range - 1 && (
          <div className="right">
            <Icon icon="arrowRight" clickHandelar={() => setIndex(index + 1)} />
          </div>
        )}
        {index > 0 && (
          <div className="left">
            {" "}
            <Icon icon="arrowLeft" clickHandelar={() => setIndex(index - 1)} />
          </div>
        )}
        <div>
          {Object.keys(val).map((key, id) => {
            console.log();
            return (
              <div key={id}>
                {`${key}`}
                {`   :  ${val[key]}`}
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};
