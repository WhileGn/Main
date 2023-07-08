"use client";

import { createSlice } from "@reduxjs/toolkit";
import exp from "constants";

export interface CounterState {
  value: any;
}

const initialState: CounterState = {
  value: false,
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
    MainState: (state) => {
      // state.value = state.value ? false : true;
      state.value = true;
      // state.value = !state.value;
      console.log(state.value);
    },
  },
});

export const { MainState } = counterSlice.actions;

export default counterSlice.reducer;
