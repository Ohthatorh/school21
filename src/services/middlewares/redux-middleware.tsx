// import { getCookie } from "@/utils/functions/cookie";
// import { clearUserInfo } from "../redux/features/userSlice";

// export const reduxMiddleware = (store) => (next) => (action) => {
//   const ignoreTypes = [
//     "persist/PERSIST",
//     "persist/REHYDRATE",
//     "user/clearUserInfo",
//   ];
//   const { dispatch, getState } = store;
//   const { type } = action;
//   if (!ignoreTypes.includes(type)) {
//     const isAuth = getState().user.user.auth.isAuth;
//     const refreshToken =
//       typeof window !== "undefined" && getCookie("refreshToken");
//     if (isAuth && !refreshToken) {
//       dispatch(clearUserInfo());
//     }
//   }
//   return next(action);
// };
