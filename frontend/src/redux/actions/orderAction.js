/** @format */

import axios from "axios";
import { server } from "../store";

export const createOrder =
    (
        shippingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount
    ) =>
    async (dispathch) => {
        try {
            dispathch({ type: "createOrderRequest" });

            const { data } = await axios.post(
                `${server}/createorder`,
                {
                    shippingInfo,
                    orderItems,
                    paymentMethod,
                    itemsPrice,
                    taxPrice,
                    shippingCharges,
                    totalAmount,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            dispathch({ type: "createOrderSuccess", payload: data.message });
        } catch (error) {
            dispathch({
                type: "createOrderFail",
                payload: error.response.data?.message,
            });
        }
    };

export const verifyPayment =
    (
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        orderOptions
    ) =>
    async (dispathch) => {
        try {
            dispathch({ type: "paymentVerificationRequest" });

            const { data } = await axios.post(
                `${server}/paymentverification`,
                {
                    razorpay_payment_id,
                    razorpay_order_id,
                    razorpay_signature,
                    orderOptions,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            dispathch({
                type: "paymentVerificationSuccess",
                payload: data.message,
            });
        } catch (error) {
            dispathch({
                type: "paymentVerificationFail",
                payload: error.response.data?.message,
            });
        }
    };

export const myOrders = () => async (dispathch) => {
    try {
        dispathch({ type: "myOrdersRequest" });

        const { data } = await axios.get(`${server}/myorders`, {
            withCredentials: true,
        });

        dispathch({ type: "myOrdersSuccess", payload: data.orders });
    } catch (error) {
        dispathch({
            type: "myOrdersFail",
            payload: error.response.data?.message,
        });
    }
};

export const getOrderDetails = (id) => async (dispathch) => {
    try {
        dispathch({ type: "getOrderDetailsRequest" });

        const { data } = await axios.get(`${server}/order/${id}`, {
            withCredentials: true,
        });

        dispathch({ type: "getOrderDetailsSuccess", payload: data.order });
    } catch (error) {
        dispathch({
            type: "getOrderDetailsFail",
            payload: error.response.data?.message,
        });
    }
};
