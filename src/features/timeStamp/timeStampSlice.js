import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_TIMESERIES } from "../../constant";
import { fetch_data } from "../../utils/commonFunctions";

const initialState = {
  timeStamp: {},
  fTimeStamp: JSON.parse(localStorage.getItem("fTimeStamp")) || {},
};
export const getTimeStampAsync = createAsyncThunk(
  "time/getTimeStamp",
  async (_, thunkAPI) => {
    const timeStamp = await fetch_data(`${API_TIMESERIES}`);
    return timeStamp;
  },
);

export const timeStampSlice = createSlice({
  name: "timeStamp",
  initialState,
  reducers: {
    fTimeStamp: (state, { payload }) => {
      const fCode = JSON.parse(localStorage.getItem("fCode")) || {};
      const date = payload;
      const fTimeStamp = {};
      if (date !== null || date !== "") {
        Object.values(fCode).map(({ code }) => {
          fTimeStamp[code] = state.timeStamp[code].dates[date];
          return null;
        });
      }
      localStorage.setItem("fTimeStamp", JSON.stringify(fTimeStamp));
      return { ...state, fTimeStamp: fTimeStamp };
    },
  },
  extraReducers: {
    [getTimeStampAsync.pending]: (state) => {
      state.status = "loading";
    },
    [getTimeStampAsync.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.timeStamp = payload;
    },
    [getTimeStampAsync.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export const selectFTStamp = ({ timeStamp }) => timeStamp.fTimeStamp;
export default timeStampSlice.reducer;
export const { fTimeStamp } = timeStampSlice.actions;
