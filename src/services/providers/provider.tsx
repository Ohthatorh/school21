"use client";
import { getCookie, setCookie } from "@/utils/functions/cookie";
import { persistor, store } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { keyGenerator } from "@/utils/functions/keyGenerator";

export function Providers({ children }: { children: React.ReactNode }) {
  if (typeof window !== "undefined" && !getCookie("deviceId"))
    setCookie("deviceId", keyGenerator(), { expires: 51840000 });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {() => children}
      </PersistGate>
    </Provider>
  );
}
