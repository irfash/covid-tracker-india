import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { getDefaultNormalizer } from "@testing-library/react";
import counterReducer from "../features/counter/counterSlice";
import dataReducer from "../features/data/dataSlice";
import statesReducer from "../features/states/statesSlice";
import timeStampReducer from "../features/timeStamp/timeStampSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    data: dataReducer,
    states: statesReducer,
    timeStamp: timeStampReducer,
  },
  middleware: getDefaultMiddleware(
    {
      immutableCheck: false,
      serializableCheck: false,
    },
    ["redux-immutable-state-invariant"],
  ),
  preloadedState: undefined,
  devTools: true,
});
