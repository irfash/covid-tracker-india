import React from "react";
import { STATE_NAMES } from "../../../constant";

export const Card = ({ stateCode, feald }) => {
  return (
    <div className="card">
      <div className="card__header">
        <div>{STATE_NAMES[stateCode]}</div>
      </div>
    </div>
  );
};
