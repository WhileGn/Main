"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import exp from "constants";

export interface CounterState {
  value: boolean;
  numvalue: number;
  numhandlers: number;
}

const initialState: CounterState = {
  value: false,
  numvalue: 0,
  numhandlers: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    MainState: (state, action) => {
      // state.value = state.value ? false : true;
      state.value = action.payload;
      if (state.value == true) {
      }
      // state.value = !state.value;
    },
    MainStateNumber: (state, action) => {
      // state.value = state.value ? false : true;

      state.numvalue = action.payload;
    },
    numberStateHandlers: (state, action) => {
      // state.value = state.value ? false : true;
      state.numhandlers += action.payload;
    },
  },
});

export const { MainState, MainStateNumber, numberStateHandlers } =
  counterSlice.actions;

export default counterSlice.reducer;
