import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  items: Array<string>;
}

const initialState: IInitialState = {
  items: [],
};

export const viewed = createSlice({
  name: "viewed",
  initialState,
  reducers: {
    addToViewed: (state: any, action: any) => {
      if (!state.items.includes(action.payload)) {
        state.items.unshift(action.payload);
        if (state.items.length > 6) state.items.pop();
      }
    },
  },
});

export const { addToViewed } = viewed.actions;

export const getViewedList = (state: RootState) => state.viewed.items;
export default viewed.reducer;
