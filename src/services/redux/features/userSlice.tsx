import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  authMailruRequest,
  authOkRequest,
  authQrRequest,
  authVkRequest,
  authYandexRequest,
  clearAuthRequest,
  connectMailruRequest,
  connectVkRequest,
  connectYandexRequest,
  disconnectMailruRequest,
  disconnectVkRequest,
  disconnectYandexRequest,
  loginEmailRequest,
  loginTelRequest,
  registerRequest,
  sendCodeEmailRequest,
  sendCodeRequest,
} from "@/utils/api/auth";
import moment from "moment";
import { clearTokens, saveTokens } from "@/utils/functions/tokens";
import {
  favouriteRequest,
  getCartRequest,
  getFavouritesRequest,
  getUserInfoRequest,
  logoutUserRequest,
  updateCartRequest,
  updateUnauthCartRequest,
  updateUserInfoRequest,
} from "@/utils/api/cabinet";
import { IUserSlice } from "@/services/types/types";
import { postReviewRequest } from "@/utils/api/postReview";
import { checkToken } from "@/utils/functions/check-token";
import {
  mindboxAddToBasket,
  mindboxAddToWishList,
  mindboxEditCustomer,
  mindboxRegisterCustomer,
  mindboxRemoveFromBasket,
  mindboxRemoveFromWishList,
} from "@/utils/api/mindbox";
import {
  yandexAddToCart,
  yandexRemoveFromCart,
  yandexSubtractFromCart,
} from "@/utils/api/yandex-metrika";
import {
  googleAddToCart,
  googleAddToWishList,
  googleRemoveFromCart,
  googleRemoveFromWishList,
} from "@/utils/api/google-analytic";
import { redirect } from "next/navigation";
import { getCookie } from "@/utils/functions/cookie";
import { callMessage } from "@/utils/functions/callMessage";
import { keyGenerator } from "@/utils/functions/keyGenerator";
import {
  dislikeAnswerRequest,
  likeAnswerRequest,
  postAnswerRequest,
  postNewQuestionRequest,
} from "@/utils/api/getQuestionsCard";
import { editUserInfo } from "@/utils/api/edit-user-info";
import { authAdmin } from "@/utils/api/auth-admin";

const initialState: IUserSlice = {
  user: {
    info: {
      cart: [],
      favourites: [],
      name: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      userRequest: false,
      userRequestError: false,
      updateUserRequest: false,
      updateUserRequestError: false,
      personal_birthday: "",
      level: 0,
    },
    auth: {
      isAuth: false,
      step: "enter",
      variant: "tel",
      queryEmail: false,
      authRequest: false,
      authRequestError: false,
      codeRequest: false,
      codeRequestError: false,
      registerRequest: false,
      registerRequestError: false,
      timeStampCode: "",
      valueToSendCode: "",
      backUrl: "",
      uuid: "",
      connectVk: false,
      connectYandex: false,
      connectMailru: false,
    },
  },
};

export const authVk: any = createAsyncThunk(
  "user/authVk",
  // @ts-ignore: Unreachable code error
  async ({ token, uuid }, { rejectWithValue, getState }) => {
    const state = getState();
    const cart = state.user.user.info.cart;
    const favourites = state.user.user.info.favourites;
    const formData = new FormData();
    formData.append("basket", JSON.stringify(cart));
    formData.append("favorites_list", JSON.stringify(favourites));
    try {
      return authVkRequest(token, uuid, formData).then((res) => res);
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const connectVk: any = createAsyncThunk(
  "user/connectVk",
  // @ts-ignore: Unreachable code error
  async ({ token, uuid }, { rejectWithValue, getState }) => {
    try {
      return connectVkRequest(token, uuid).then((res) => {
        return res;
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const authYandex: any = createAsyncThunk(
  "user/authYandex",
  // @ts-ignore: Unreachable code error
  async ({ code }, { rejectWithValue, getState }) => {
    const state = getState();
    const cart = state.user.user.info.cart;
    const favourites = state.user.user.info.favourites;
    const formData = new FormData();
    formData.append("basket", JSON.stringify(cart));
    formData.append("favorites_list", JSON.stringify(favourites));
    try {
      return authYandexRequest(code, formData).then((res) => res);
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const connectYandex: any = createAsyncThunk(
  "user/connectYandex",
  // @ts-ignore: Unreachable code error
  async ({ code }, { rejectWithValue, getState }) => {
    try {
      return connectYandexRequest(code).then((res) => res);
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const mailruAuth: any = createAsyncThunk(
  "user/mailruAuth",
  // @ts-ignore: Unreachable code error
  async ({ code }, { rejectWithValue, getState }) => {
    const state = getState();
    const cart = state.user.user.info.cart;
    const favourites = state.user.user.info.favourites;
    const formData = new FormData();
    formData.append("basket", JSON.stringify(cart));
    formData.append("favorites_list", JSON.stringify(favourites));
    try {
      return authMailruRequest(code, formData).then((res) => res);
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const connectMailru: any = createAsyncThunk(
  "user/connectMailru",
  // @ts-ignore: Unreachable code error
  async ({ code }, { rejectWithValue, getState }) => {
    try {
      return connectMailruRequest(code).then((res) => res);
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);
export const disconnectMailru: any = createAsyncThunk(
  "user/disconnectMailru",
  // @ts-ignore: Unreachable code error
  async ({ status }, { rejectWithValue, getState }) => {
    try {
      return disconnectMailruRequest().then((res) => {
        return res;
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);
export const disconnectYandex: any = createAsyncThunk(
  "user/disconnectYandex",
  // @ts-ignore: Unreachable code error
  async ({ status }, { rejectWithValue, getState }) => {
    try {
      return disconnectYandexRequest().then((res) => res);
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);
export const disconnectVK: any = createAsyncThunk(
  "user/disconnectVK",
  // @ts-ignore: Unreachable code error
  async ({ status }, { rejectWithValue, getState }) => {
    try {
      return disconnectVkRequest().then((res) => res);
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const okAuth: any = createAsyncThunk(
  "user/okAuth",
  // @ts-ignore: Unreachable code error
  async ({ code }, { rejectWithValue, getState }) => {
    const state = getState();
    const cart = state.user.user.info.cart;
    const favourites = state.user.user.info.favourites;
    const formData = new FormData();
    formData.append("basket", JSON.stringify(cart));
    formData.append("favorites_list", JSON.stringify(favourites));
    try {
      return authOkRequest(code, formData).then((res) => res);
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const loginTel: any = createAsyncThunk(
  "user/loginTel",
  // @ts-ignore: Unreachable code error
  async ({ value }, { rejectWithValue }) => {
    try {
      return loginTelRequest(value).then((res) => {
        return {
          ...res,
          phone: value,
        };
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const sendAuthCode: any = createAsyncThunk(
  "user/sendAuthCode",
  // @ts-ignore: Unreachable code error
  async ({ code, variant }, { rejectWithValue, getState }) => {
    const state = getState();
    const cart = state.user.user.info.cart;
    const favourites = state.user.user.info.favourites;
    const formData = new FormData();
    formData.append("basket", JSON.stringify(cart));
    formData.append("favorites_list", JSON.stringify(favourites));
    try {
      if (variant === "tel") {
        return sendCodeRequest(code, formData).then((res) => res);
      } else if (variant === "email") {
        return sendCodeEmailRequest(code, formData).then((res) => res);
      }
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const sendAuthQrCode: any = createAsyncThunk(
  "user/authQr",
  // @ts-ignore: Unreachable code error
  async ({ code }, { rejectWithValue, getState }) => {
    const state = getState();
    const cart = state.user.user.info.cart;
    const favourites = state.user.user.info.favourites;
    const formData = new FormData();
    formData.append("basket", JSON.stringify(cart));
    formData.append("favorites_list", JSON.stringify(favourites));
    try {
      return authQrRequest(code, formData).then((res) => res);
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const loginEmail: any = createAsyncThunk(
  "user/loginEmail",
  // @ts-ignore: Unreachable code error
  async ({ email }, { rejectWithValue }) => {
    try {
      return loginEmailRequest(email).then((res) => {
        return {
          ...res,
          email: email,
        };
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const adminLogin: any = createAsyncThunk(
  "user/adminLogin",
  // @ts-ignore: Unreachable code error
  async ({ login, pass }, { rejectWithValue }) => {
    try {
      if (login && pass) {
        const res = await authAdmin(login, pass);
        if (res) {
          return {
            ...res,
            email: login,
          };
        } else {
          return rejectWithValue("error");
        }
      } else {
        return rejectWithValue("error");
      }
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const register: any = createAsyncThunk(
  "user/register",
  // @ts-ignore: Unreachable code error
  async ({ email }, { rejectWithValue }) => {
    try {
      return registerRequest(email).then((res) => res);
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const getUser: any = createAsyncThunk(
  "user/getUser",
  async (params, { rejectWithValue, dispatch, getState }) => {
    try {
      return getUserInfoRequest().then((res) => {
        const checkRefreshToken = checkToken(dispatch, getState, res, getUser);
        if (checkRefreshToken) {
          return res;
        } else {
          return rejectWithValue("error");
        }
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const updateUser: any = createAsyncThunk(
  "user/updateUser",
  async (data, { rejectWithValue, dispatch, getState }) => {
    try {
      return updateUserInfoRequest(data).then((res) => {
        const checkRefreshToken = checkToken(dispatch, getState, res, () =>
          updateUser(data)
        );
        if (checkRefreshToken) {
          return res;
        } else {
          return rejectWithValue("error");
        }
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const addToFavourites: any = createAsyncThunk(
  "user/addToFavourites",
  async ({ id, price }, { rejectWithValue, dispatch, getState }) => {
    try {
      return favouriteRequest(id).then((res) => {
        const checkRefreshToken = checkToken(dispatch, getState, res, () =>
          addToFavourites({ id, price })
        );
        if (checkRefreshToken) {
          return res;
        } else {
          return rejectWithValue("error");
        }
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const getUserCart: any = createAsyncThunk(
  "user/getUserCart",
  async (data, { rejectWithValue, dispatch, getState }) => {
    try {
      return await getCartRequest().then((res) => {
        const checkRefreshToken = checkToken(dispatch, getState, res, () =>
          getUserCart()
        );
        if (checkRefreshToken) {
          return res;
        } else {
          return rejectWithValue("error");
        }
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const getUserFavourites: any = createAsyncThunk(
  "user/getUserFavourites",
  async (data, { rejectWithValue, dispatch, getState }) => {
    try {
      return await getFavouritesRequest().then((res) => {
        const checkRefreshToken = checkToken(dispatch, getState, res, () =>
          getUserFavourites()
        );
        if (checkRefreshToken) {
          return res;
        } else {
          return rejectWithValue("error");
        }
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const postReview: any = createAsyncThunk(
  "user/postReview",
  async (data, { rejectWithValue, dispatch, getState }) => {
    try {
      return await postReviewRequest(data).then((res) => {
        const checkRefreshToken = checkToken(dispatch, getState, res, () =>
          postReview(data)
        );
        if (checkRefreshToken) {
          return res;
        } else {
          return rejectWithValue("error");
        }
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const postQuestion: any = createAsyncThunk(
  "user/postQuestion",
  async ({ cardId, questions }, { rejectWithValue, dispatch, getState }) => {
    try {
      return await postNewQuestionRequest(cardId, questions).then((res) => {
        const checkRefreshToken = checkToken(dispatch, getState, res, () =>
          postNewQuestionRequest(cardId, questions)
        );
        if (checkRefreshToken) {
          return res;
        } else {
          return rejectWithValue("error");
        }
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const likeAnswer: any = createAsyncThunk(
  "user/likeAnswer",
  async ({ id, answerId }, { rejectWithValue, dispatch, getState }) => {
    try {
      return await likeAnswerRequest(id, answerId).then((res) => {
        const checkRefreshToken = checkToken(dispatch, getState, res, () =>
          likeAnswerRequest(id, answerId)
        );
        if (checkRefreshToken) {
          return res;
        } else {
          return rejectWithValue("error");
        }
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const dislikeAnswer: any = createAsyncThunk(
  "user/dislikeAnswer",
  async ({ id, answerId }, { rejectWithValue, dispatch, getState }) => {
    try {
      return await dislikeAnswerRequest(id, answerId).then((res) => {
        const checkRefreshToken = checkToken(dispatch, getState, res, () =>
          dislikeAnswerRequest(id, answerId)
        );
        if (checkRefreshToken) {
          return res;
        } else {
          return rejectWithValue("error");
        }
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const postAnswer: any = createAsyncThunk(
  "user/postAnswer",
  async (
    { cardId, answerId, answer },
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      return await postAnswerRequest(cardId, answerId, answer).then((res) => {
        const checkRefreshToken = checkToken(dispatch, getState, res, () =>
          postAnswerRequest(cardId, answerId, answer)
        );
        if (checkRefreshToken) {
          return res;
        } else {
          return rejectWithValue("error");
        }
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const addToCart: any = createAsyncThunk(
  "user/addToCart",
  async ({ id, quantity, price }, { rejectWithValue, dispatch, getState }) => {
    // isChecked
    try {
      const isAuth = getState().user.user.auth.isAuth;
      if (isAuth) {
        return await updateCartRequest(id, quantity).then((res) => {
          const checkRefreshToken = checkToken(dispatch, getState, res, () =>
            addToCart({
              id,
              quantity,
              price,
              // isChecked
            })
          );
          if (checkRefreshToken) {
            return res;
          } else {
            return rejectWithValue("error");
          }
        });
      } else {
        return await updateUnauthCartRequest(id, quantity).then((res) => res);
      }
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const removeFromCart: any = createAsyncThunk(
  "user/removeFromCart",
  async ({ id, quantity, price }, { rejectWithValue, dispatch, getState }) => {
    try {
      const isAuth = getState().user.user.auth.isAuth;
      if (isAuth) {
        return await updateCartRequest(id, 0).then((res) => {
          const checkRefreshToken = checkToken(dispatch, getState, res, () =>
            removeFromCart({ id, quantity, price })
          );
          if (checkRefreshToken) {
            return res;
          } else {
            return rejectWithValue("error");
          }
        });
      } else {
        return await updateUnauthCartRequest(id).then((res) => res);
      }
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const changeQuantity: any = createAsyncThunk(
  "user/changeQuantity",
  async (
    { id, quantity, price, categories, name, method, step },
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      const isAuth = getState().user.user.auth.isAuth;
      if (isAuth) {
        return await updateCartRequest(id, quantity).then((res) => {
          const checkRefreshToken = checkToken(dispatch, getState, res, () =>
            changeQuantity({
              id,
              quantity,
              price,
              categories,
              name,
              method,
              step,
            })
          );
          if (checkRefreshToken) {
            return res;
          } else {
            return rejectWithValue("error");
          }
        });
      }
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const editEmail: any = createAsyncThunk(
  "user/editEmail",
  async (
    { emailCode, email }: { emailCode: string; email: string },
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      return editUserInfo("mail", "code", emailCode)
        .then((res) => {
          if (res.success) {
            callMessage("Успех", "Почта была изменена", true);
          } else {
            callMessage("Ошибка", res.error_msg, false);
          }
          return email;
        })
        .catch((err) => {
          callMessage("Ошибка", "Повторите попытку позже", false);
        });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);
export const editPhone: any = createAsyncThunk(
  "user/editPhone",
  async (
    { phoneCode, phone }: { phoneCode: string; phone: string },
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      return editUserInfo("phone", "code", phoneCode)
        .then((res) => {
          if (res.success) {
            callMessage("Успех", "Номер телефона изменен", true);
          } else {
            callMessage("Ошибка", res.error_msg, false);
          }
          return phone;
        })
        .catch((err) => {
          callMessage("Ошибка", "Повторите попытку позже", false);
        });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearAuth: (state) => {
      clearAuthRequest();
      state.user.auth = initialState.user.auth;
    },
    setVariant: (state, action) => {
      state.user.auth.variant = action.payload;
    },
    checkUserAuth: (state) => {
      const isAuth = state.user.auth.isAuth;
      const refreshToken = getCookie("refreshToken");
      if (isAuth && !refreshToken) {
        state.user = initialState.user;
        clearTokens();
      }
    },
    clearUserInfo: (state) => {
      state.user = initialState.user;
      clearTokens();
      redirect("/");
    },
    logout: (state) => {
      callMessage("Успешно!", "Вы вышли из аккаунта.", true);
      state.user = initialState.user;
      logoutUserRequest();
      clearTokens();
    },
    addNewPrice: (state, action) => {
      const itemIndex = state.user.info.cart.findIndex(
        (item) =>
          item.product_id === Number(action.payload.id) && !item.isRemoved
      );
      if (itemIndex !== -1) {
        state.user.info.cart = state.user.info.cart.map((item, index) => {
          if (index === itemIndex) {
            return {
              ...item,
              new: action.payload.price.new,
              old: action.payload.price.old,
            };
          }
          return item;
        });
      }
    },
    removePrice: (state, action) => {
      const updatedCart = state.user.info.cart.map((item) => {
        if (item.product_id === action.payload.product_id) {
          return {
            ...item,
            new: 0,
            old: 0,
          };
        }
        return item;
      });
      return {
        ...state,
        user: {
          ...state.user,
          info: {
            ...state.user.info,
            cart: updatedCart,
          },
        },
      };
    },
    setIsCheckedAllProduct: (state, action) => {
      const filtredCart = state.user.info.cart.map((item) => {
        return {
          ...item,
          // isChecked: action.payload.isChecked
        };
      });
      // @ts-ignore: Unreachable code error
      state.user.info.cart = filtredCart;
    },
    setIsCheckedProduct: (state, action) => {
      const filtredCart = state.user.info.cart.map((item) => {
        if (item.product_id === action.payload.id) {
          return {
            ...item,
            // isChecked: action.payload.isChecked
          };
        } else {
          return item;
        }
      });
      // @ts-ignore: Unreachable code error
      state.user.info.cart = filtredCart;
    },
    setRemovedInCart: (state, action) => {
      // @ts-ignore: Unreachable code error
      const itemIndex = state.user.info.cart.findIndex(
        (item) => item.product_id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.user.info.cart[itemIndex] = {
          ...state.user.info.cart[itemIndex],
          isRemoved: action.payload.removed,
          isChecked: action.payload.removed,
        };
      }
    },
    removeInCart: (state, action) => {
      state.user.info.cart = state.user.info.cart.filter(
        (item) => item.product_id !== action.payload
      );
    },
    clearCartOnRefresh: (state) => {
      state.user.info.cart = state.user.info.cart.filter(
        (item) => item.isRemoved !== true
      );
    },
    clearCart: (state, action) => {
      const concatArray = state.user.info.cart;
      action.payload.items.forEach((item) => {
        const index = concatArray.findIndex(
          (arrItem) => arrItem.product_id === item.product_id
        );
        concatArray.splice(index, 1);
      });
      state.user.info.cart = concatArray;
    },
    setAuthStatus: (state) => {
      state.user.auth.step = "enter";
    },
    setUUID: (state) => {
      state.user.auth.backUrl = document.location.href;
      state.user.auth.uuid = keyGenerator();
    },
    clearUUID: (state) => {
      state.user.auth.backUrl = "";
      state.user.auth.uuid = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user.auth.step = "code";
      state.user.auth.variant = "email";
      state.user.auth.queryEmail = true;
      state.user.auth.valueToSendCode = action.meta.arg.email;
      state.user.auth.timeStampCode = moment().add(1, "minutes").format();
    });
    builder.addCase(loginTel.pending, (state, action) => {
      state.user.auth.authRequest = true;
      state.user.auth.authRequestError = false;
      state.user.auth.valueToSendCode = "7" + action.meta.arg.value;
    });
    builder.addCase(loginTel.fulfilled, (state, action) => {
      state.user.auth.authRequest = false;
      state.user.auth.step = "code";
      state.user.auth.timeStampCode = moment().add(1, "minutes").format();
      state.user.info.phone = "7" + action.meta.arg.value;
    });
    builder.addCase(loginTel.rejected, (state, action) => {
      state.user.auth.authRequest = false;
      state.user.auth.authRequestError = true;
    });
    builder.addCase(sendAuthCode.pending, (state, action) => {
      state.user.auth.codeRequest = true;
      state.user.auth.codeRequestError = false;
    });
    builder.addCase(sendAuthCode.fulfilled, (state, action) => {
      state.user.auth.codeRequest = false;
      if (action.payload.success) {
        if (action.payload.message === "Query Email") {
          state.user.auth.step = "email";
          state.user.auth.queryEmail = true;
        } else {
          state.user.auth.queryEmail = false;
          state.user.auth.variant = "tel";
          state.user.auth.step = "enter";
          state.user.info.cart = action.payload.data.basket;
          state.user.info.favourites = action.payload.data.favorites;
          state.user.auth.isAuth = true;
          state.user.info.name = action.payload.data.name;
          saveTokens(
            action.payload.data.token.access_token,
            action.payload.data.token.refresh_token
          );
          callMessage("Успешно!", "Вы успешно авторизованы.", true);
          if (
            action.payload.data.new_user &&
            action.payload.data.new_user === true
          ) {
            mindboxRegisterCustomer(
              action.payload.data.user_data.email,
              action.payload.data.user_data.phone
            );
            ym(42989679, "reachGoal", "registration");
          } else {
            ym(42989679, "reachGoal", "authorization");
          }
        }
      }
    });
    builder.addCase(authVk.fulfilled, (state, action) => {
      state.user.info.cart = action.payload.data.basket.map((el: any) => {
        return {
          ...el,
          isRemoved: false,
        };
      });
      state.user.info.favourites = action.payload.data.favorites;
      state.user.auth.isAuth = true;
      state.user.info.name = action.payload.data.name;
      saveTokens(
        action.payload.data.token.access_token,
        action.payload.data.token.refresh_token
      );
      if (
        action.payload.data.new_user &&
        action.payload.data.new_user === true
      ) {
        mindboxRegisterCustomer(
          action.payload.data.user_data.email,
          action.payload.data.user_data.phone
        );
        ym(42989679, "reachGoal", "registration");
      } else {
        ym(42989679, "reachGoal", "authorization");
      }
      callMessage("Успешно!", "Вы успешно авторизованы.", true);
    });
    builder.addCase(connectVk.fulfilled, (state, action) => {
      if (action.payload.vk === true && action.payload.auth === true) {
        state.user.auth.connectVk = true;
        callMessage("Успешно!", "Вы успешно привязали свой аккаунт VK.", true);
      } else {
        callMessage("Ошибка!", action.payload.error_msg, false);
      }
    });
    builder.addCase(disconnectVK.fulfilled, (state, action) => {
      if (action.payload.unset === true) {
        state.user.auth.connectVk = false;
        callMessage(
          "Успешно!",
          "Вы успешно отвязали свой аккаунт Вконтакте.",
          true
        );
      } else {
        callMessage("Ошибка!", action.payload.error_msg, false);
      }
    });
    builder.addCase(authYandex.fulfilled, (state, action) => {
      state.user.info.cart = action.payload.data.basket.map((el: any) => {
        return {
          ...el,
          isRemoved: false,
        };
      });
      state.user.info.favourites = action.payload.data.favorites;
      state.user.auth.isAuth = true;
      state.user.info.name = action.payload.data.name;
      saveTokens(
        action.payload.data.token.access_token,
        action.payload.data.token.refresh_token
      );
      if (
        action.payload.data.new_user &&
        action.payload.data.new_user === true
      ) {
        mindboxRegisterCustomer(
          action.payload.data.user_data.email,
          action.payload.data.user_data.phone
        );
        ym(42989679, "reachGoal", "registration");
      } else {
        ym(42989679, "reachGoal", "authorization");
      }
      callMessage("Успешно!", "Вы успешно авторизованы.", true);
    });
    builder.addCase(sendAuthQrCode.fulfilled, (state, action) => {
      state.user.info.cart = action.payload.data.basket.map((el: any) => {
        return {
          ...el,
          isRemoved: false,
        };
      });
      state.user.info.favourites = action.payload.data.favorites;
      state.user.auth.isAuth = true;
      state.user.info.name = action.payload.data.name;
      saveTokens(
        action.payload.data.token.access_token,
        action.payload.data.token.refresh_token
      );
      if (
        action.payload.data.new_user &&
        action.payload.data.new_user === true
      ) {
        mindboxRegisterCustomer(
          action.payload.data.user_data.email,
          action.payload.data.user_data.phone
        );
        ym(42989679, "reachGoal", "registration");
      } else {
        ym(42989679, "reachGoal", "authorization");
      }
      callMessage("Успешно!", "Вы успешно авторизованы.", true);
    });
    builder.addCase(connectYandex.fulfilled, (state, action) => {
      if (action.payload.yandex === true && action.payload.auth === true) {
        state.user.auth.connectYandex = true;
        callMessage(
          "Успешно!",
          "Вы успешно привязали свой аккаунт Яндекс.",
          true
        );
      } else {
        callMessage("Ошибка!", action.payload.error_msg, false);
      }
    });
    builder.addCase(disconnectYandex.fulfilled, (state, action) => {
      if (action.payload.unset === true) {
        state.user.auth.connectYandex = false;
        callMessage(
          "Успешно!",
          "Вы успешно отвязалили свой аккаунт Яндекс",
          true
        );
      } else {
        callMessage("Ошибка!", action.payload.error_msg, false);
      }
      // if (action.payload.mailru === true && action.payload.auth === true) {
      //   state.user.auth.connectMailru === true;
      //   callMessage("Успешно!", "Вы успешно привязали свой аккаунт Mail.ru.", true);
      // }else{
      //   callMessage("Ошибка!", action.payload.error_msg, false);
      // }
    });
    builder.addCase(mailruAuth.fulfilled, (state, action) => {
      state.user.info.cart = action.payload.data.basket.map((el: any) => {
        return {
          ...el,
          isRemoved: false,
        };
      });
      state.user.info.favourites = action.payload.data.favorites;
      state.user.auth.isAuth = true;
      state.user.info.name = action.payload.data.name;
      saveTokens(
        action.payload.data.token.access_token,
        action.payload.data.token.refresh_token
      );
      if (
        action.payload.data.new_user &&
        action.payload.data.new_user === true
      ) {
        mindboxRegisterCustomer(
          action.payload.data.user_data.email,
          action.payload.data.user_data.phone
        );
        ym(42989679, "reachGoal", "registration");
      } else {
        ym(42989679, "reachGoal", "authorization");
      }
      callMessage("Успешно!", "Вы успешно авторизованы.", true);
    });
    builder.addCase(connectMailru.fulfilled, (state, action) => {
      if (action.payload.mailru === true && action.payload.auth === true) {
        state.user.auth.connectMailru = true;
        callMessage(
          "Успешно!",
          "Вы успешно привязали свой аккаунт Mail.ru.",
          true
        );
      } else {
        callMessage("Ошибка!", action.payload.error_msg, false);
      }
    });
    builder.addCase(disconnectMailru.fulfilled, (state, action) => {
      if (action.payload.unset === true) {
        state.user.auth.connectMailru = false;
        callMessage(
          "Успешно!",
          "Вы успешно отвязалили свой аккаунт Mail.ru",
          true
        );
      } else {
        callMessage("Ошибка!", action.payload.error_msg, false);
      }
    });
    builder.addCase(okAuth.fulfilled, (state, action) => {
      state.user.info.cart = action.payload.data.basket.map((el: any) => {
        return {
          ...el,
          isRemoved: false,
        };
      });
      state.user.info.favourites = action.payload.data.favorites;
      state.user.auth.isAuth = true;
      state.user.info.name = action.payload.data.name;
      saveTokens(
        action.payload.data.token.access_token,
        action.payload.data.token.refresh_token
      );
      if (
        action.payload.data.new_user &&
        action.payload.data.new_user === true
      ) {
        mindboxRegisterCustomer(
          action.payload.data.user_data.email,
          action.payload.data.user_data.phone
        );
        ym(42989679, "reachGoal", "registration");
      } else {
        ym(42989679, "reachGoal", "authorization");
      }
      callMessage("Успешно!", "Вы успешно авторизованы.", true);
    });
    builder.addCase(sendAuthCode.rejected, (state, action) => {
      state.user.auth.codeRequest = false;
      state.user.auth.codeRequestError = true;
    });
    builder.addCase(adminLogin.pending, (state, action) => {
      state.user.auth.registerRequest = true;
      state.user.auth.registerRequestError = false;
    });
    builder.addCase(adminLogin.fulfilled, (state, action) => {
      state.user.auth.registerRequest = false;
      if (action.payload.success) {
        state.user.info.email = action.payload.email;
        saveTokens(
          action.payload.data.token.access_token,
          action.payload.data.token.refresh_token
        );
        state.user.auth.isAuth = true;
      }
    });
    builder.addCase(adminLogin.rejected, (state, action) => {
      state.user.auth.registerRequest = false;
      state.user.auth.registerRequestError = true;
    });
    builder.addCase(loginEmail.pending, (state, action) => {
      state.user.auth.registerRequest = true;
      state.user.auth.registerRequestError = false;
    });
    builder.addCase(loginEmail.fulfilled, (state, action) => {
      state.user.auth.registerRequest = false;
      if (action.payload.success) {
        state.user.auth.step = "code";
        state.user.auth.valueToSendCode = action.meta.arg.email;
        state.user.auth.timeStampCode = moment().add(1, "minutes").format();
        state.user.info.email = action.meta.arg.email;
      }
    });
    builder.addCase(loginEmail.rejected, (state, action) => {
      state.user.auth.registerRequest = false;
      state.user.auth.registerRequestError = true;
    });
    builder.addCase(getUser.pending, (state, action) => {
      state.user.info.userRequest = true;
      state.user.info.userRequestError = false;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.user.info.userRequest = false;
        state.user.info.lastname = action.payload.user.last_name;
        state.user.info.email = action.payload.user.email;
        state.user.info.phone = action.payload.user.personal_phone;
        state.user.info.address = action.payload.user.personal_street;
        state.user.info.personal_birthday =
          action.payload.user.personal_birthday;

        state.user.auth.connectVk = action.payload.user.uf_vk;
        state.user.auth.connectYandex = action.payload.user.uf_yandex;
        state.user.auth.connectMailru = action.payload.user.uf_mailru;
        state.user.info.level = action.payload.level;
      }
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.user.info.userRequest = false;
      state.user.info.userRequestError = true;
    });
    builder.addCase(updateUser.pending, (state, action) => {
      state.user.info.updateUserRequest = true;
      state.user.info.updateUserRequestError = false;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user.info.updateUserRequest = false;
      if (action.payload.success) {
        state.user.info.lastname = action.meta.arg.last_name;
        state.user.info.name = action.meta.arg.name;
        state.user.info.address = action.meta.arg.address;
        mindboxEditCustomer(action.meta.arg);
        callMessage("Успешно!", "Данные успешно изменены.", true);
      }
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.user.info.updateUserRequest = false;
      state.user.info.updateUserRequestError = true;
    });
    builder.addCase(getUserCart.pending, (state, action) => {
      state.user.info.updateUserRequest = true;
      state.user.info.updateUserRequestError = false;
    });
    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.user.info.updateUserRequest = false;
      const currentCart = state.user.info.cart;
      const payloadCart = action.payload.items;
      const updatedFiltredCart = payloadCart.map((filtredItem) => {
        const matchingCurrentItem = currentCart.find(
          (currentItem) => currentItem.product_id === filtredItem.product_id
        );
        if (matchingCurrentItem && matchingCurrentItem.isRemoved) {
          return {
            ...filtredItem,
            isRemoved: true,
          };
        }
        return filtredItem;
      });
      // const newPayload = action.payload.items.map(item => item.isChecked = true)
      state.user.info.cart = action.payload.items;
    });
    builder.addCase(getUserCart.rejected, (state, action) => {
      state.user.info.updateUserRequest = false;
      state.user.info.updateUserRequestError = true;
    });
    builder.addCase(addToFavourites.fulfilled, (state, action) => {
      const isInFavourites = state.user.info.favourites.findIndex(
        (item) => item == action.meta.arg.id
      );
      if (isInFavourites === -1) {
        // @ts-ignore: Unreachable code error
        state.user.info.favourites.push(Number(action.meta.arg.id));
        mindboxAddToWishList(action.meta.arg.id, action.meta.arg.price);
        googleAddToWishList(action.meta.arg.id, action.meta.arg.price);
        ym(42989679, "reachGoal", "addFavourite");
      } else {
        state.user.info.favourites.splice(isInFavourites, 1);
        mindboxRemoveFromWishList(action.meta.arg.id, action.meta.arg.price);
        googleRemoveFromWishList(action.meta.arg.id, action.meta.arg.price);
        ym(42989679, "reachGoal", "removeFavourite");
      }
      callMessage(
        "Успешно!",
        isInFavourites === -1
          ? "Товар добавлен в избранное"
          : "Товар удален из избранного",
        true
      );
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      // нужно если товар лежит в редаксе но не на бэке
      // чтобы можно было его вернуть обратно
      const isInCart = state.user.info.cart.findIndex(
        (elem: { product_id: number }) => {
          return elem.product_id === action.meta.arg.id;
        }
      );
      // будет вызываться только если товар есть в редаксе
      if (isInCart >= 0) {
        // @ts-ignore: Unreachable code error
        state.user.info.cart[isInCart] = {
          product_id: Number(action.meta.arg.id),
          quantity: action.meta.arg.quantity,
          isRemoved: false,
          // isChecked: true
        };
      } else {
        // @ts-ignore: Unreachable code error
        state.user.info.cart.push({
          product_id: Number(action.meta.arg.id),
          quantity: action.meta.arg.quantity,
          isRemoved: false,
          // isChecked: true
        });
      }
      mindboxAddToBasket(action.meta.arg.id, action.meta.arg.price);
      yandexAddToCart(
        action.meta.arg.id,
        action.meta.arg.price,
        action.meta.arg.quantity,
        action.payload.breadcrumb,
        action.payload.name
      );
      googleAddToCart(
        action.meta.arg.id,
        action.meta.arg.price,
        action.meta.arg.quantity,
        action.payload.breadcrumb,
        action.payload.name
      );
      ym(42989679, "reachGoal", "addCart");
      callMessage("Успешно!", "Товар добавлен в корзину", true);
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      // state.user.info.cart = state.user.info.cart.filter(
      //   (state) => state.product_id !== action.meta.arg.id
      // );
      ym(42989679, "reachGoal", "removeCart");
      yandexRemoveFromCart(
        action.meta.arg.id,
        action.meta.arg.quantity,
        action.payload.breadcrumb,
        action.payload.name
      );
      googleRemoveFromCart(
        action.meta.arg.id,
        action.meta.arg.price,
        action.meta.arg.quantity,
        action.payload.breadcrumb,
        action.payload.name
      );
      mindboxRemoveFromBasket(action.meta.arg.id, action.meta.arg.price);
    });
    builder.addCase(getUserFavourites.fulfilled, (state, action) => {
      state.user.info.favourites = action.payload.items;
    });
    builder.addCase(changeQuantity.fulfilled, (state, action) => {
      // @ts-ignore: Unreachable code error
      state.user.info.cart.find(
        // @ts-ignore: Unreachable code error
        (item) => item.product_id === action.meta.arg.id
      ).quantity = action.meta.arg.quantity;
      if (action.meta.arg.method === "append") {
        yandexAddToCart(
          action.meta.arg.id,
          action.meta.arg.price,
          action.meta.arg.diffPack,
          action.meta.arg.categories,
          action.meta.arg.name
        );
      }
      if (action.meta.arg.method === "subtract") {
        yandexSubtractFromCart(
          action.meta.arg.id,
          action.meta.arg.diffPack,
          action.meta.arg.categories,
          action.meta.arg.name
        );
      }
    });
    builder.addCase(editEmail.fulfilled, (state, action) => {
      state.user.info.email = action.payload;
    });
    builder.addCase(editPhone.fulfilled, (state, action) => {
      state.user.info.phone = action.payload;
    });
  },
});

export const {
  logout,
  setRemovedInCart,
  clearCart,
  clearUserInfo,
  addNewPrice,
  removePrice,
  setAuthStatus,
  setUUID,
  clearUUID,
  checkUserAuth,
  clearCartOnRefresh,
  removeInCart,
  setVariant,
  clearAuth,
  setIsCheckedProduct,
  setIsCheckedAllProduct,
} = user.actions;
export const getConnectVk = (state: RootState) =>
  state.user.user.auth.connectVk;
export const getConnectYandex = (state: RootState) =>
  state.user.user.auth.connectYandex;
export const getConnectMailru = (state: RootState) =>
  state.user.user.auth.connectMailru;
export const getUserInfo = (state: RootState) => state.user.user;
export const getAuthStatus = (state: RootState) => state.user.user.auth;
export const getAuthVariant = (state: RootState) =>
  state.user.user.auth.variant;
export const isQueryEmail = (state: RootState) =>
  state.user.user.auth.queryEmail;
export const getCart = (state: RootState) => state.user.user.info.cart;
export const getAuthUUID = (state: RootState) => state.user.user.auth.uuid;
export const getBackUrl = (state: RootState) => state.user.user.auth.backUrl;

export default user.reducer;
