"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: boolean;
  numvalue: number;
  numhandlers: number;
  clickstate: boolean;
  finishBTNBoolian: Boolean;
}

const initialState: CounterState = {
  value: false,
  numvalue: 0,
  numhandlers: 0,
  clickstate: false,
  finishBTNBoolian: false,
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
    finishButionhandlers: (state, action) => {
      state.finishBTNBoolian = action.payload;
    },
  },
});

export const {
  MainState,
  MainStateNumber,
  numberStateHandlers,
  ckickstate,
  finishButionhandlers,
} = counterSlice.actions;

export default counterSlice.reducer;
