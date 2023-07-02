/** @format */

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : {
              cheeseBurger: {
                  price: 199,
                  quantity: 0,
              },

              vegCheeseBurger: {
                  price: 299,
                  quantity: 0,
              },

              burgerWithFries: {
                  price: 399,
                  quantity: 0,
              },
          },
    subTotal: localStorage.getItem("cartPrices")
        ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
        : 0,
    tax: localStorage.getItem("cartPrices")
        ? JSON.parse(localStorage.getItem("cartPrices")).tax
        : 0,
    shippingCharges: localStorage.getItem("cartPrices")
        ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
        : 0,
    total: localStorage.getItem("cartPrices")
        ? JSON.parse(localStorage.getItem("cartPrices")).total
        : 0,
    shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
};

export const cartReducer = createReducer(initialState, {
    cheeseBurgerIncreament: (state) => {
        state.cartItems.cheeseBurger.quantity += 1;
    },
    vegCheeseBurgerIncreament: (state) => {
        state.cartItems.vegCheeseBurger.quantity += 1;
    },
    burgerWithFriesIncreament: (state) => {
        state.cartItems.burgerWithFries.quantity += 1;
    },

    cheeseBurgerDecreament: (state) => {
        state.cartItems.cheeseBurger.quantity -= 1;
    },
    vegCheeseBurgerDecreament: (state) => {
        state.cartItems.vegCheeseBurger.quantity -= 1;
    },
    burgerWithFriesDecreament: (state) => {
        state.cartItems.burgerWithFries.quantity -= 1;
    },

    calculatePrice: (state) => {
        state.subTotal =
            state.cartItems.cheeseBurger.price *
                state.cartItems.cheeseBurger.quantity +
            state.cartItems.vegCheeseBurger.price *
                state.cartItems.vegCheeseBurger.quantity +
            state.cartItems.burgerWithFries.price *
                state.cartItems.burgerWithFries.quantity;

        state.tax = state.subTotal * 0.18;
        state.shippingCharges = state.subTotal > 500 ? 0 : 20;

        state.total = state.subTotal + state.shippingCharges + state.tax;
    },

    emptyState: (state) => {
        state.cartItems = {
            cheeseBurger: {
                quantity: 0,
                price: 199,
            },
            vegCheeseBurger: {
                quantity: 0,
                price: 299,
            },
            burgerWithFries: {
                quantity: 0,
                price: 399,
            },
        };
        state.subTotal = 0;
        state.tax = 0;
        state.shippingCharges = 0;
        state.total = 0;
        state.shippingInfo = {};
    },

    addShippingInfo: (state, action) => {
        state.shippingInfo = {
            hNo: action.payload.hNo,
            city: action.payload.city,
            state: action.payload.state,
            country: action.payload.country,
            pinCode: action.payload.pinCode,
            phoneNo: action.payload.phoneNo,
        };
    },
});
