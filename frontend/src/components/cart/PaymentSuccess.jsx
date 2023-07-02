/** @format */

import React from "react";
import { Link } from "react-router-dom";

function PaymentSuccess() {
    return (
        <section className="paymentSucess">
            <main>
                <h1>Order Confirmed</h1>
                <p>
                    Order Placed Successfully, You can check order status below
                </p>
                <Link to={"/myorders"}>Check Status</Link>
            </main>
        </section>
    );
}

export default PaymentSuccess;
