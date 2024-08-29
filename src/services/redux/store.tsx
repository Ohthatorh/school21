import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "./storage";
import city from "./features/citySlice";
import search from "./features/searchSlice";
import order from "./features/orderSlice";
import viewed from "./features/viewedSlice";
import user from "./features/userSlice";
import popups from "./features/popupsSlice";
import stories from "./features/storiesSlice";
import afterOrderSlice from "./features/afterOrderSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  viewed,
  city,
  order,
  search,
  user,
  popups,
  stories,
  afterOrderSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export let store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware,
});

export const persistor = persistStore(store);
