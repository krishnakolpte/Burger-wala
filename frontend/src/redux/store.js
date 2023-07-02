/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./reducers/adminReducer";
import { cartReducer } from "./reducers/cartReducer";
import { orderReducer, ordersReducer } from "./reducers/orderReducer";
import { userReducer } from "./reducers/userReducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        order: orderReducer,
        orders: ordersReducer,
        admin: adminReducer,
    },
});

export default store;

export const server = "https://burger-wala-server.vercel.app/api/v1";
