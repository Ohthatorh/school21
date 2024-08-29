import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IAnswer } from "@/services/types/types";


interface IInitialState {
  haveGun: {
    step: number;
    haveGun: boolean | null;
    firstTime: boolean;
    answers: Array<IAnswer>;
    goingBuy: boolean | null;
  };
}

const initialState: IInitialState = {
  haveGun: {
    step: 0,
    haveGun: null,
    firstTime: true,
    answers: [],
    goingBuy: null,
  },
};

export const popups = createSlice({
  name: "popups",
  initialState,
  reducers: {
    setHaveGunClosed: (state) => {
      state.haveGun.firstTime = false;
    },
    setHaveGunStep: (state, action) => {
      state.haveGun.step = action.payload;
    },
    setGoungbuy: (state, action) => {
      state.haveGun.goingBuy = action.payload;
    },
    setHaveGun: (state, action) => {
      state.haveGun.haveGun = action.payload;
    },
    setHaveGunAnswer: (state, action) => {
      state.haveGun.answers.push({
        question: action.payload.question,
        answer: action.payload.answer,
      });
    },
  },
});

export const {
  setHaveGunStep,
  setHaveGunAnswer,
  setHaveGun,
  setHaveGunClosed,
} = popups.actions;

export const haveGunPopupState = (state: RootState) => state.popups.haveGun;
export default popups.reducer;
