import React from "react";
import { useSelector } from "react-redux";
import { selectState } from "../features/data/dataSlice";
import "../sass/searchBar.scss";
import { Date } from "./input/Date";
import { Input } from "./input/Input";
// --------------------------------------------------------------------
export const SearchBar = () => {
  const state = useSelector(selectState);

  return (
    <div className="sb">
      {!state ? <span>India</span> : <span>Tn</span>}
      <Input
        className="searchTerm"
        placeholder="Search..."
        keyTerm="searchTerm"
      />
      <Date />
      {/* <Select
        placeholder="SortBy..."
        className="sortBy"
        keyTerm="sortBy"
        options={SORTBY_OPT}
      /> */}

      {/* <input type="text" placeholder="district" /> */}
    </div>
  );
};
