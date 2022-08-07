import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SORTBY, SORTBY_OPT } from "../constant";
import { selectState, setstate, sortBy } from "../features/data/dataSlice";
import { useLogger } from "../hook/useLogger";
import "../sass/searchBar.scss";
import { Date } from "./input/Date";
import { Input } from "./input/Input";
import { Select } from "./input/Select";
// --------------------------------------------------------------------
export const SearchBar = () => {
  const stateStatus = useSelector(selectState);
  const [sortOpt, setSortOpt] = useState("");

  return (
    <div className="sb">
      {!stateStatus ? <span>Inia</span> : <span></span>}
      <Input
        className="searchTerm"
        placeholder="Search..."
        keyTerm="searchTerm"
      />
      <Date />

      <Select
        placeholder="SortBy..."
        className="sortBy"
        keyTerm="sortBy"
        options={SORTBY}
      />

      {/* <input type="text" placeholder="district" /> */}
    </div>
  );
};
