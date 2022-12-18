import { createSlice } from "@reduxjs/toolkit";
import { USD } from "../constants/currency";

const initialState = {
  currency: USD,
};

export const regionSlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeRegion: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { changeRegion } = regionSlice.actions;

export default regionSlice.reducer;
