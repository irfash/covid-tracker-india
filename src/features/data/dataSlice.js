import { createSlice } from "@reduxjs/toolkit";
import { STATE_CODE_ARR } from "../../constant";

const initialState = {
  searchTerm: localStorage.getItem("searchTerm") || "",
  date: localStorage.getItem("date") || "",
  state: localStorage.getItem("state") || "",
  fCode: JSON.parse(localStorage.getItem("fCode")) || STATE_CODE_ARR,
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
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
    setSearchDate: (state, { payload }) => {
      state.date = payload;
    },
  },
});
export const selectState = ({ data }) => data.state;
export const selectDate = ({ data }) => data.date;
export const selectFCode = ({ data }) => data.fCode;
export const { setSearchTerm, filterCode, setSearchDate } = dataSlice.actions;
export default dataSlice.reducer;
