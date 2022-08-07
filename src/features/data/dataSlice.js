import { createSlice } from "@reduxjs/toolkit";
import { STATE_CODE_ARR } from "../../constant";

const initialState = {
  searchTerm: JSON.parse(localStorage.getItem("searchTerm")) || "",
  date: JSON.parse(localStorage.getItem("date")) || "",
  state: localStorage.getItem("state") || "",
  fCode: JSON.parse(localStorage.getItem("fCode")) || STATE_CODE_ARR,
  sortBy: JSON.parse(localStorage.getItem("sortBy")) || "",
  toggleAZ: JSON.parse(localStorage.getItem("toggleAZ")) || true,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    filterCode: (state) => {
      const stateCodeArr = STATE_CODE_ARR.filter(({ name }) => {
        return name
          .replace(/ /g, "")
          .toLowerCase()
          .includes(state.searchTerm.toLowerCase());
      });
      localStorage.setItem("fCode", JSON.stringify(stateCodeArr));

      return { ...state, fCode: stateCodeArr };
    },
    sortBy: (state, { payload }) => {
      console.log(payload);
      state.sortBy = payload;
    },
    toggleAZ: (state) => {
      console.log(state.toggleAZ);
      state.toggleAZ = !state.toggleAZ;
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
    setSearchDate: (state, { payload }) => {
      state.date = payload;
    },
  },
});
export const selectSortBy = ({ data }) => data.sortBy;
export const selectToggleAZ = ({ data }) => data.toggleAZ;
export const selectState = ({ data }) => data.state;
export const selectDate = ({ data }) => data.date;
export const selectFCode = ({ data }) => data.fCode;
export const selectFSorted = ({ states, data }) => {
  let newArr = [];
  if (states.sortBy === "conformed") {
    newArr = [...Object.entries(states.fStates)].sort((a, b) => {
      return a[1].total.confirmed - b[1].total.confirmed;
    });
  } else {
    newArr = [...Object.entries(states.fStates)].sort((a, b) => {
      return (
        a[1].total.vaccinated1 +
        a[1].total.vaccinated2 -
        (b[1].total.vaccinated2 + b[1].total.vaccinated1)
      );
    });
  }
  if (data.toggleAZ) {
    newArr.reverse();
    console.log(newArr);
  }

  const newObj = {};
  newArr.map((value) => {
    newObj[value[0]] = value[1];
    return "";
  });
  // console.log(newObj);
  return newObj;
};
export const { setSearchTerm, filterCode, setSearchDate, sortBy, toggleAZ } =
  dataSlice.actions;
export default dataSlice.reducer;
