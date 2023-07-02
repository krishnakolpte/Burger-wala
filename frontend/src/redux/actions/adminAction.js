/** @format */

import axios from "axios";
import { server } from "../store";

export const getAllOrders = () => async (dispathch) => {
    try {
        dispathch({ type: "getAllOrdersRequest" });

        const { data } = await axios.get(`${server}/admin/orders`, {
            withCredentials: true,
        });

        dispathch({ type: "getAllOrdersSuccess", payload: data.orders });
    } catch (error) {
        dispathch({
            type: "getAllOrdersFail",
            payload: error.response.data?.message,
        });
    }
};

export const getAllUrders = () => async (dispathch) => {
    try {
        dispathch({ type: "getAllUsersRequest" });

        const { data } = await axios.get(`${server}/admin/users`, {
            withCredentials: true,
        });

        dispathch({ type: "getAllUsersSuccess", payload: data.users });
    } catch (error) {
        dispathch({
            type: "getAllUsersFail",
            payload: error.response.data?.message,
        });
    }
};

export const getAdminStats = () => async (dispathch) => {
    try {
        dispathch({ type: "getStatsRequest" });

        const { data } = await axios.get(`${server}/admin/stats`, {
            withCredentials: true,
        });

        dispathch({ type: "getStatsSuccess", payload: data });
    } catch (error) {
        dispathch({
            type: "getStatsFail",
            payload: error.response.data?.message,
        });
    }
};

export const processOrder = (id) => async (dispathch) => {
    try {
        dispathch({ type: "processOrderRequest" });

        const { data } = await axios.get(`${server}/admin/order/${id}`, {
            withCredentials: true,
        });

        dispathch({ type: "processOrderSuccess", payload: data.message });
    } catch (error) {
        dispathch({
            type: "processOrderFail",
            payload: error.response.data?.message,
        });
    }
};
