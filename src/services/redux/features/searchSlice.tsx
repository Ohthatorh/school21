import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: { search: Array<any> } = {
  search: [],
};

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state: any, action: any) => {
      if (!state.search.includes(action.payload)) {
        state.search.unshift(action.payload);
        if (state.search.length > 3) state.search.pop();
      }
    },
    removeItemSearch: (state: any, action: any) => {
      state.search = state.search.filter((el) => el !== action.payload);
    },
  },
});

export const { setSearch, removeItemSearch } = search.actions;

export const getSearchList = (state: RootState) => state.search.search;

export default search.reducer;
