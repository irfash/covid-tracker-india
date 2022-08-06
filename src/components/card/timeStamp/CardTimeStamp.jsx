import React, { useState } from "react";
import { STATE_NAMES } from "../../../constant";
import { CardContent } from "../CardContent";

export const CardTimeStamp = ({ stateCode, feald }) => {
  const getContent = (content) => {
    const ini = {};
    ini["delta"] = content?.delta || {};
    ini["delta7"] = content?.delta7 || {};
    ini["total"] = content?.total || {};
    return ini;
  };
  const [content, setContent] = useState(getContent(feald));

  return (
    <div className="card">
      <div className="card__header">
        <div>{STATE_NAMES[stateCode]}</div>
      </div>

      <CardContent {...content} />
    </div>
  );
};
