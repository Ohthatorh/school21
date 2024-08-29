import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  city: string;
  code: string;
}

const initialState: IInitialState = {
  city: "Москва",
  code: "moskva",
};

export const city = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (
      state: any,
      action: { payload: { name: string; code: string } }
    ) => {
      state.city = action.payload.name;
      state.code = action.payload.code;
    },
  },
});

export const { setCity } = city.actions;

export const getCity = (state: RootState) => state.city;
export const getCityCode = (state: RootState) => state.city.code;

export default city.reducer;
