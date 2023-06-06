import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

// type SliceState = { state: "loading" } | { state: "finished"; data: string };

// const initialState: SliceState = { state: "loading" };

// const initialState = 0;

const Mainreduce = createSlice({
  name: "mainFotnum",
  initialState: {
    mainNum: 0,
  },
  reducers: {
    mainState(state, action) {
      state.mainNum = action.payload;
    },
  },
});

// export const store = configureStore({
//    Mainreduce
// });

// export default store;
// export default Mainreduce.reducer;
