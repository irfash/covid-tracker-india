import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_DATA } from "../../constant";
import { fetch_data } from "../../utils/commonFunctions";

const initialState = {
  states: {},
  fStates: JSON.parse(localStorage.getItem("fStates")) || {},
};
export const getStatesAsync = createAsyncThunk(
  "states/getStates",
  async (_, thunkAPI) => {
    const states = await fetch_data(`${API_DATA}`);
    const formatedData = {};
    Object.entries(states).map(([key, value]) => {
      const { delta, delta7, total, districts } = value;
      formatedData[key] = {
        delta,
        delta7,
        total,
        districts,
      };
      return null;
    });
    localStorage.setItem(
      "fCode",
      JSON.stringify(thunkAPI.getState().data.fCode),
    );

    return formatedData;
  },
);

export const statesSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
    filterStates: (state) => {
      const fCode = JSON.parse(localStorage.getItem("fCode")) || [];
      const fStates = {};
      fCode.map(({ code, name }) => {
        fStates[code] = state.states[code];
        return null;
      });
      localStorage.setItem("fStates", JSON.stringify(fStates));
      return { ...state, fStates: fStates };
    }
  },
  extraReducers: {
    [getStatesAsync.pending]: (state) => {
      state.status = "loading";
    },
    [getStatesAsync.fulfilled]: (state, { payload }) => {
      state.status = "success";

      if (Object.keys(state.fStates).length === 0) {
        localStorage.setItem("fStates", JSON.stringify(payload));
        state.fStates = payload;
      }
      state.states = payload;
    },
    [getStatesAsync.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});
export const selectStatus = ({ states }) => states.status;
export const selectStates = ({ states }) => states.states;
export const selectFStates = ({ states }) => states.fStates;

export const { filterStates } = statesSlice.actions;
export default statesSlice.reducer;
