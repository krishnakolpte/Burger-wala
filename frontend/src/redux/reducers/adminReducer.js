/** @format */

import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
    {
        orders: [],
        users: [],
    },
    {
        getAllOrdersRequest: (state) => {
            state.loading = true;
        },
        getAllOrdersSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.orders = action.payload;
        },
        getAllOrdersFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },

        getAllUsersRequest: (state) => {
            state.loading = true;
        },
        getAllUsersSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.users = action.payload;
        },
        getAllUsersFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },

        getStatsRequest: (state) => {
            state.loading = true;
        },
        getStatsSuccess: (state, action) => {
            state.loading = false;
            state.usersCount = action.payload.usersCount;
            state.ordersCount = action.payload.ordersCount;
            state.totalIncome = action.payload.totalIncome;
        },
        getStatsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        processOrderRequest: (state) => {
            state.loading = true;
        },
        processOrderSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        processOrderFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;
        },
    }
);
