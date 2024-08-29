import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  viewedStories: Array<string>;
  isMuted: boolean;
}

const initialState: IInitialState = {
  viewedStories: [],
  isMuted: false,
};

export const stories = createSlice({
  name: "stories",
  initialState,
  reducers: {
    addToViewedStories: (state: any, action: any) => {
      if (!state.viewedStories.includes(action.payload)) {
        state.viewedStories.unshift(action.payload);
      }
    },
    setMuted: (state: any, action: { payload: boolean }) => {
      state.isMuted = action.payload;
    },
    setUnMuted: (state: any, action: { payload: boolean }) => {
      state.isMuted = action.payload;
    },
  },
});

export const { addToViewedStories, setMuted, setUnMuted } = stories.actions;

export const getMutedStatus = (state: RootState) => state.stories.isMuted;
export const getStoriesViewedList = (state: RootState) =>
  state.stories.viewedStories;

export default stories.reducer;
