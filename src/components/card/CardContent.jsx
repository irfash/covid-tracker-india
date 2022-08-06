import React, { useState } from "react";
import { validate_data } from "../../utils/commonFunctions";
import { Icon } from "../icon/Icon";
// --------------------------------------------------------------------
export const CardContent = ({ total = {}, delta = {}, delta7 = {} }) => {
  const data = [
    { Total: validate_data(total) },
    { Delta: validate_data(delta) },
    { Delta7: validate_data(delta7) },
  ];

  const [index, setIndex] = useState(0);
  const range = data.length;
  const title = Object.keys(data[index]);
  const val = data[index][title];

  return (
    <div>
      <h3>{title}</h3>
      {index < range - 1 && (
        <Icon
          icon="arrowRight"
          className="right"
          clickHandelar={() => setIndex(index + 1)}
        />
      )}
      {index > 0 && (
        <Icon
          icon="arrowLeft"
          className="left"
          clickHandelar={() => setIndex(index - 1)}
        />
      )}
      <div>
        {Object.keys(val).map((key, id) => {
          return (
            <div key={id}>
              {`${key}`}
              {`   :  ${val[key]}`}
            </div>
          );
        })}
      </div>
    </div>
  );
};
