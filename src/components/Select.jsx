import React from "react";
import { useLocalStorage } from "../hook/useLocalStorage";

export const Select = ({ placeholder, code, options, local = true }) => {
  const [value, setValue, rest] = useLocalStorage(code, "");
  const handelChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <select value={value} onChange={(e) => handelChange(e)}>
      <option disabled>{}</option>
      {options.map((option, id) => (
        <option value={option} key={id}>
          {option}
        </option>
      ))}
    </select>
  );
};

// import React from "react";
// import { useSelector } from "react-redux";
// import { SORTBY_OPT } from "../constant";
// import { selectState } from "../features/data/dataSlice";
// import "../sass/searchBar.scss";
// import { Date } from "./input/Date";
// import { Input } from "./input/Input";
// import { Select } from "./Select";
// // --------------------------------------------------------------------
// export const SearchBar = () => {
//   const state = useSelector(selectState);

//   return (
//     <div className="sb">
//       {!state ? <span>India</span> : <span>Tn</span>}
//       <Input
//         className="searchTerm"
//         placeholder="Search..."
//         keyTerm="searchTerm"
//       />
//       <Date />
//       <Select
//         placeholder="SortBy..."
//         className="sortBy"
//         keyTerm="sortBy"
//         options={SORTBY_OPT}
//       />
//       {/* <input type="text" placeholder="district" /> */}
//     </div>
//   );
// };
