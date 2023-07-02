/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";
import Loader from "../layouts/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, processOrder } from "../../redux/actions/adminAction";
import toast from "react-hot-toast";

function Orders() {
    const dispatch = useDispatch();

    const { loading, orders, message, error } = useSelector(
        (state) => state.admin
    );

    const processOrderHandler = (id) => {
        dispatch(processOrder(id));
    };

    useEffect(() => {
        dispatch(getAllOrders());
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: "clearMessage" });
        }
    }, [dispatch, message, error]);

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
                                <th>User</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders &&
                                orders.map((i, index) => (
                                    <tr key={index}>
                                        <td>{i._id}</td>
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
                                        <td>{i.user.name}</td>
                                        <td>
                                            <Link to={`/order/${i._id}`}>
                                                <AiOutlineEye />
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    processOrderHandler(i._id)
                                                }>
                                                <GiArmoredBoomerang />
                                            </button>
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

export default Orders;
