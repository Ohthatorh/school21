import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface IInitialState {
  afterOrder: boolean;
}

const initialState: IInitialState = {
  afterOrder: false
};

export const afterOrderSlice = createSlice({
  name: "afterOrderSlice",
  initialState,
  reducers: {
    setAnswerAfterOrder: (state, action) => {
      state.afterOrder = action.payload;
    }
  },
});

export const {
  setAnswerAfterOrder
} = afterOrderSlice.actions;

export const afterOrderStatus = (state: RootState) => state.popups.afterOrder
export default afterOrderSlice.reducer;
