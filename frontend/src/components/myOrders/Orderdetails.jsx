/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../redux/actions/orderAction";
import Loader from "../layouts/Loader";

function Orderdetails() {
    const dispatch = useDispatch();
    const params = useParams();

    const { order, loading } = useSelector((state) => state.orders);

    useEffect(() => {
        dispatch(getOrderDetails(params.id));
    }, [dispatch, params.id]);

    return (
        <section className="orderDetails">
            {loading ? (
                <Loader />
            ) : (
                <main>
                    <h1>Order Details</h1>
                    <div>
                        <h1>Shipping</h1>
                        <p>
                            <b>Address</b>
                            {order &&
                                `${order.shippingInfo.hNo}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.country}, ${order.shippingInfo.pinCode}.`}
                        </p>
                    </div>
                    <div>
                        <h1>Contact</h1>
                        <p>
                            <b>Name</b>
                            {order && order.user.name}
                        </p>
                        <p>
                            <b>Phone</b>
                            {order && order.shippingInfo.phoneNo}
                        </p>
                    </div>
                    <div>
                        <h1>Status</h1>
                        <p>
                            <b>Order Status</b>
                            {order && order.orderStatus}
                        </p>
                        <p>
                            <b>Placed At</b>
                            {order && order.createdAt.split("T")[0]}
                        </p>
                        <p>
                            <b>Delavered At</b>
                            {order && order.deliveredAt
                                ? order.deliveredAt.split("T")[0]
                                : "NAN"}
                        </p>
                    </div>
                    <div>
                        <h1>Payment</h1>
                        <p>
                            <b>Payment Method</b>
                            {order && order.paymentMethod}
                        </p>
                        <p>
                            <b>Payment Reference</b>
                            {order && order.paymentMethod === "Online"
                                ? `#${order.paymentInfo}`
                                : "NA"}
                        </p>
                        <p>
                            <b>Paid At</b>
                            {order && order.paymentMethod === "Online"
                                ? `${order && order.paidAt.split("T")[0]}`
                                : "NA"}
                        </p>
                    </div>

                    <div>
                        <h1>Amount</h1>
                        <p>
                            <b>Items Total Price</b>₹{order && order.itemsPrice}
                        </p>
                        <p>
                            <b>Shipping Charges</b>₹
                            {order && order.shippingCharges}
                        </p>
                        <p>
                            <b>Tax</b>₹{order && order.taxPrice}
                        </p>
                        <p>
                            <b>Total</b>₹{order && order.totalAmount}
                        </p>
                    </div>

                    <article>
                        <h1>Ordered Items</h1>
                        <div>
                            <h4>Cheese Burger</h4>
                            <div>
                                <span>
                                    ₹
                                    {order &&
                                        order.orderItems.cheeseBurger.price}
                                </span>
                                x
                                <span>
                                    {order &&
                                        order.orderItems.cheeseBurger.quantity}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h4>Veg Cheese Burger</h4>
                            <div>
                                <span>
                                    ₹
                                    {order &&
                                        order.orderItems.vegCheeseBurger.price}
                                </span>
                                x
                                <span>
                                    {order &&
                                        order.orderItems.vegCheeseBurger
                                            .quantity}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h4>Burger With fries</h4>
                            <div>
                                <span>
                                    ₹
                                    {order &&
                                        order.orderItems.burgerWithFries.price}
                                </span>
                                x
                                <span>
                                    {order &&
                                        order.orderItems.burgerWithFries
                                            .quantity}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
                            <div style={{ fontWeight: 800 }}>
                                ₹{order && order.itemsPrice}
                            </div>
                        </div>
                    </article>
                </main>
            )}
        </section>
    );
}

export default Orderdetails;
