import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components/card/Card";
import { CardTimeStamp } from "../../components/card/timeStamp/CardTimeStamp";

import { selectDate } from "../data/dataSlice";
import { selectFTStamp } from "../timeStamp/timeStampSlice";
import { selectFStates, selectStatus } from "./statesSlice";

export const States = () => {
  const status = useSelector(selectStatus);
  const fState = useSelector(selectFStates);
  const date = useSelector(selectDate);
  const fTimeStamp = useSelector(selectFTStamp);
  return (
    <>
      {status === "success" && fState !== null && fState !== undefined ? (
        <div className="states">
          <div className="cards">
            {!date
              ? Object.keys(fState).map((key, id) => {
                  return <Card stateCode={key} feald={fState[key]} key={id} />;
                })
              : Object.keys(fTimeStamp).map((key, id) => {
                  return (
                    <CardTimeStamp
                      stateCode={key}
                      feald={fTimeStamp[key]}
                      key={id}
                      nav={false}
                    />
                  );
                })}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};
