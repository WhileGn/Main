"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: boolean;
  numvalue: number;
  numhandlers: number;
  clickstate: boolean;
}

const initialState: CounterState = {
  value: false,
  numvalue: 0,
  numhandlers: 0,
  clickstate: false,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    MainState: (state, action) => {
      state.value = action.payload;
    },
    ckickstate: (state, action) => {
      state.clickstate = action.payload;
    },
    MainStateNumber: (state, action) => {
      state.numvalue = action.payload;
    },
    numberStateHandlers: (state, action) => {
      state.numhandlers += action.payload;
    },
  },
});

export const { MainState, MainStateNumber, numberStateHandlers, ckickstate } =
  counterSlice.actions;

export default counterSlice.reducer;
