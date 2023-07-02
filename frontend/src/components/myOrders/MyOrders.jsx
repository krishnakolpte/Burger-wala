/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { myOrders } from "../../redux/actions/orderAction";
import { toast } from "react-hot-toast";
import Loader from "../layouts/Loader";

function MyOrders() {
    const dispatch = useDispatch();

    const { orders, loading, error } = useSelector((state) => state.orders);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" });
        }
        dispatch(myOrders());
    }, [dispatch, error]);

    return (
        <section className="tableClass">
            {loading ? (
                <Loader />
            ) : (
                <main>
                    <table>
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Status</th>
                                <th>Item Quantity</th>
                                <th>Amount</th>
                                <th>Payment method</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders &&
                                orders.map((i, index) => (
                                    <tr key={index}>
                                        <td># {i._id}</td>
                                        <td>{i.orderStatus}</td>
                                        <td>
                                            {i.orderItems.cheeseBurger
                                                .quantity +
                                                i.orderItems.vegCheeseBurger
                                                    .quantity +
                                                i.orderItems.burgerWithFries
                                                    .quantity}
                                        </td>
                                        <td>₹ {i.totalAmount}</td>
                                        <td>{i.paymentMethod}</td>
                                        <td>
                                            <Link to={`/order/${i._id}`}>
                                                <AiOutlineEye />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </main>
            )}
        </section>
    );
}

export default MyOrders;
