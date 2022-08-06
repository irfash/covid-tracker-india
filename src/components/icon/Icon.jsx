import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { icons } from "./icons";
// --------------------------------------------------------------------
export const Icon = ({
  className = "icon",
  icon = "circleX",
  size = "1x",
  clickHandelar = () => {},
}) => {
  return (
    <FontAwesomeIcon
      className={className}
      icon={icons[icon]}
      size={size}
      onClick={clickHandelar}
    />
  );
};
