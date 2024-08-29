import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { createOrderRequest } from "@/utils/api/order";
import { getCookie } from "@/utils/functions/cookie";
import { clearUserInfo } from "./userSlice";
import { refreshToken } from "@/utils/functions/refresh-token";
import {
  mindboxCreateAuthorizedOrder,
  mindboxCreateUnauthorizedOrder,
} from "@/utils/api/mindbox";
import { yandexPurchase } from "@/utils/api/yandex-metrika";
import { googlePurchase } from "@/utils/api/google-analytic";

interface IOrderSlice {
  step: number;
  coupon?: string;
  nsum?: number;
  sum?: number;
  customer: {
    name: string;
    last_name: string;
    tel: string;
    email: string;
  };
  refferer: false | string,
  reffererProductID: false | number,
  items: {
    licenseItems: Array<{
      id: number;
      type: {
        delivery: number;
      };
      store: any;
    }>;
    notLicenseItems: Array<{
      id: number;
      count: number;
    }>;
    cityItems: any[];
  };
  delivery: {
    method: string;
    clientCity: string;
    deliveryCourierCompany: string;
    clientStreet: string;
    clientHouse: string;
    clientApartment: string;
    deliveryCompany: string;
    deliveryName: string;
    point: string;
    diliveryName: string;
    deliveryAddress: string;
    pointWorkTime: string;
  };
  createdOrder: {
    [key: string]: any;
  };
}

const initialState: IOrderSlice = {
  step: 1,
  coupon: "",
  nsum: 0,
  sum: 0,
  customer: {
    name: "",
    last_name: "",
    tel: "",
    email: "",
  },
  refferer: false,
  reffererProductID: false,
  items: {
    licenseItems: [],
    notLicenseItems: [],
    cityItems: [],
  },
  delivery: {
    method: "",
    clientCity: "",
    deliveryCourierCompany: "",
    clientStreet: "",
    clientHouse: "",
    clientApartment: "",
    deliveryCompany: "",
    point: "",
    diliveryName: "",
    deliveryAddress: "",
    pointWorkTime: "",
    deliveryName: "",
  },
  createdOrder: {},
};

export const createOrder: any = createAsyncThunk(
  "order/createOrder",
  // @ts-ignore: Unreachable code error
  async (
    { items, orderInfo, cartItems },
    { rejectWithValue, dispatch, getState }
  ) => {
    const data = {
      ...orderInfo,
      promocode: orderInfo.promocode ? orderInfo.promocode : "",
      actualitems: items,
    };
    try {
      return createOrderRequest(data).then((res) => {
        const isAuth = getState().user.user.auth.isAuth;
        if (isAuth && !getCookie("refreshToken")) {
          dispatch(clearUserInfo());
        }
        if (
          typeof window !== "undefined" &&
          getCookie("refreshToken") &&
          res.auth === false
        ) {
          dispatch(refreshToken(createOrder({ items, orderInfo })));
          return res;
        }
        if (isAuth) {
          mindboxCreateAuthorizedOrder(
            res.items.oid,
            items,
            orderInfo.customer,
            res.items.amount,
            cartItems
          );
        } else {
          mindboxCreateUnauthorizedOrder(
            res.items.oid,
            items,
            orderInfo.customer,
            res.items.amount,
            cartItems
          );
        }
        yandexPurchase(res.items.oid, res.items.amount, cartItems, items);
        googlePurchase(res.items.oid, res.items.amount, cartItems, items);
        ym(42989679, "reachGoal", "ordering");
        return res;
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);
// export const createOrder: any = createAsyncThunk(
//   "order/createOrder",
//   // @ts-ignore: Unreachable code error
//   async ({ items, orderInfo }, { rejectWithValue }) => {
//     const data = {
//       ...orderInfo,
//       promocode: orderInfo.promocode ? orderInfo.promocode : "",
//       actualitems: items,
//     };
//     try {
//       return createOrderRequest(data).then((res) => res);
//     } catch (err) {
//       return rejectWithValue("error");
//     }
//   }
// );
export const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    setPromocode: (state, action) => {
      state.coupon = action.payload.coupon;
      state.sum = action.payload.sum;
      state.nsum = action.payload.nsum;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setCustomerInfo: (state, action) => {
      const { step, name, last_name, tel, email } = action.payload;
      state.step = step;
      state.customer = {
        name,
        last_name,
        tel,
        email,
      };
    },
    setCityItems: (state, action) => {
      const cityItems = action.payload.map((item: { [key: string]: any }) => {
        const findedItem =
          current(state).items.cityItems &&
          current(state).items.cityItems.find(
            (cityItem: { [key: string]: any }) => cityItem.id == item.id
          );
        if (findedItem) return findedItem;
        if (item.notPrepend.length > 0) {
          let stores = {};
          item.notPrepend.forEach((storeNotPrepend: any) => {
            stores = {
              ...stores,
              [storeNotPrepend.id]: storeNotPrepend.amount,
            };
          });
          return {
            id: item.id,
            store: stores,
          };
        } else if (item.prepend.length === 1) {
          return {
            id: item.id,
            store: {
              [Number(item.prepend[0].id)]: item.userAmount,
            },
          };
        } else {
          return {
            id: item.id,
          };
        }
      });
      if (!cityItems.length) {
        state.items = {
          ...state.items,
          cityItems: [],
        };
        return;
      }
      state.items = {
        ...state.items,
        cityItems: cityItems,
      };
    },
    setDeliveryLicenseItems: (state, action) => {
      if (state.items.licenseItems) {
        return;
      }
      state.items = {
        ...state.items,
        licenseItems: action.payload.items.map(
          (item: { [key: string]: any }) => {
            return {
              id: item.id,
              type: item.type,
            };
          }
        ),
      };
    },
    setDeliveryNotLicenseItems: (state, action) => {
      state.items = {
        ...state.items,
        notLicenseItems: action.payload.items.map(
          (item: { [key: string]: any }) => {
            return {
              id: item.id,
              count: item.count,
            };
          }
        ),
      };
      state.delivery = {
        method: current(state).delivery.method
          ? current(state).delivery.method
          : "point",
        clientCity: action.payload.city,
        deliveryCourierCompany: current(state).delivery.deliveryCourierCompany
          ? current(state).delivery.deliveryCourierCompany
          : "",
        clientStreet: current(state).delivery.clientStreet
          ? current(state).delivery.clientStreet
          : "",
        clientHouse: current(state).delivery.clientHouse
          ? current(state).delivery.clientHouse
          : "",
        clientApartment: current(state).delivery.clientApartment
          ? current(state).delivery.clientApartment
          : "",
        deliveryCompany: current(state).delivery.deliveryCompany
          ? current(state).delivery.deliveryCompany
          : "",
        point: current(state).delivery.point
          ? current(state).delivery.point
          : "",
        deliveryName: current(state).delivery.deliveryName
          ? current(state).delivery.deliveryName
          : "",
        deliveryAddress: current(state).delivery.deliveryAddress
          ? current(state).delivery.deliveryAddress
          : "",
        pointWorkTime: current(state).delivery.pointWorkTime
          ? current(state).delivery.pointWorkTime
          : "",
      };
    },
    setChoosePointCityItem: (state, action) => {
      state.items.cityItems = state.items.cityItems.map((item) => {
        if (item.id === action.payload.itemId) {
          return {
            ...item,
            store: {
              [action.payload.storeId]: action.payload.count,
            },
          };
        }
        return item;
      });
    },
    setDeliveryLicensePoint: (state, action) => {
      state.items.licenseItems = state.items.licenseItems.map((item: any) => {
        return {
          ...item,
          store: {
            [action.payload]: Object.values(current(item).type).reduce(
              (accumulator: any, currentValue: any) =>
                Number(accumulator) + currentValue,
              0
            ),
          },
        };
      });
    },
    setTypeDeliveryNotLicenseItems: (state, action) => {
      state.delivery = {
        ...state.delivery,
        method: action.payload,
      };
    },
    setDeliveryNotLicense: (state, action) => {
      state.delivery = {
        ...state.delivery,
        deliveryCourierCompany: action.payload,
      };
    },
    setDeliveryNotLicenseForm: (state, action) => {
      state.delivery = {
        ...state.delivery,
        clientStreet: action.payload.street,
        clientHouse: action.payload.house,
        clientApartment: action.payload.apartment,
      };
    },
    setDeliveryNotLicensePoint: (state, action) => {
      state.delivery = {
        ...state.delivery,
        deliveryCompany: action.payload.deliveryCompany,
        point: action.payload.point,
        deliveryName: action.payload.deliveryName,
        deliveryAddress: action.payload.deliveryAddress,
        pointWorkTime: action.payload.pointWorkTime,
      };
    },
    clearItemsInfo: (state) => {
      state.items = {};
      state.delivery = {};
    },
    clearOrderInfo: (state) => {
      state.createdOrder = {}
    },
    setRefferer: (state, action) => {
      state.refferer = action.payload
    },
    clearRefferer: (state) => {
      state.refferer = false
    },
    setReffererProductID: (state, action) => {
      state.reffererProductID = action.payload
    },
    clearReffererProductID: (state) => {
      state.reffererProductID = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder.fulfilled, (state, action) => {
      if (action.payload.success) {
        return (state = {
          step: 1,
          customer: {},
          items: {},
          delivery: {},
          createdOrder: {
            orderId: action.payload.items.oid,
            amount: action.payload.items.amount / 100,
          },
        });
      } else return;
    });
  },
});

export const {
  setCustomerInfo,
  setStep,
  setCityItems,
  setDeliveryLicenseItems,
  setDeliveryNotLicenseItems,
  setChoosePointCityItem,
  setDeliveryLicensePoint,
  setTypeDeliveryNotLicenseItems,
  setDeliveryNotLicensePoint,
  setDeliveryNotLicenseForm,
  setDeliveryNotLicense,
  clearItemsInfo,
  setPromocode,
  clearOrderInfo,
  setRefferer,
  clearRefferer,
  setReffererProductID,
  clearReffererProductID
} = order.actions;

export const getOrderInfo = (state: RootState) => state.order;
export const getStep = (state: RootState) => state.order.step;
export const getCustomerInfo = (state: RootState) => state.order.customer;
export const getCityItems = (state: RootState) => state.order.items.cityItems;
export const getItemsCart = (state: RootState) => state.order.items;
export const getPromocode = (state: RootState) => state.order.coupon;
export const getLicenseItems = (state: RootState) =>
  state.order.items.licenseItems;
export const getNotLicenseItems = (state: RootState) =>
  state.order.items.notLicenseItems;
export const getStoreLicenseItems = (state: RootState) =>
  state.order.items.licenseItems &&
  state.order.items.licenseItems[0].store &&
  Object.keys(state.order.items.licenseItems[0].store)[0];
export const getDeliveryNotLicenseItems = (state: RootState) =>
  state.order.delivery;
export const getCreatedOrderInfo = (state: RootState) =>
  state.order.createdOrder;
export const getReffererProductId = (state: RootState) => state.order.reffererProductID
export default order.reducer;
