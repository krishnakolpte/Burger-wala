/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

function Cart() {
    const {
        cartItems: { cheeseBurger, vegCheeseBurger, burgerWithFries },
        subTotal,
        tax,
        shippingCharges,
        total,
    } = useSelector((state) => state.cart);
    const { cartItems: orderItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const increment = (item) => {
        switch (item) {
            case 1:
                dispatch({ type: "cheeseBurgerIncreament" });
                dispatch({ type: "calculatePrice" });
                break;
            case 2:
                dispatch({ type: "vegCheeseBurgerIncreament" });
                dispatch({ type: "calculatePrice" });
                break;
            case 3:
                dispatch({ type: "burgerWithFriesIncreament" });
                dispatch({ type: "calculatePrice" });
                break;

            default:
                dispatch({ type: "cheeseBurgerIncreament" });
                dispatch({ type: "calculatePrice" });
                break;
        }
    };
    const decrement = (itemNum) => {
        switch (itemNum) {
            case 1:
                if (cheeseBurger.quantity === 0) return;
                dispatch({ type: "cheeseBurgerDecreament" });
                dispatch({ type: "calculatePrice" });
                break;
            case 2:
                if (vegCheeseBurger.quantity === 0) return;
                dispatch({ type: "vegCheeseBurgerDecreament" });
                dispatch({ type: "calculatePrice" });
                break;
            case 3:
                if (burgerWithFries.quantity === 0) return;
                dispatch({ type: "burgerWithFriesDecreament" });
                dispatch({ type: "calculatePrice" });
                break;

            default:
                if (cheeseBurger.quantity === 0) return;
                dispatch({ type: "cheeseBurgerDecreament" });
                dispatch({ type: "calculatePrice" });
                break;
        }
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(orderItems));
        localStorage.setItem(
            "cartPrices",
            JSON.stringify({ subTotal, tax, shippingCharges, total })
        );
    }, [orderItems, subTotal, tax, shippingCharges, total]);

    return (
        <section className="cart">
            <main>
                <CartItem
                    title={"Cheese Burger"}
                    value={cheeseBurger.quantity}
                    img={burger1}
                    increment={() => increment(1)}
                    decrement={() => decrement(1)}
                />
                <CartItem
                    title={"Veg Cheese Burger"}
                    value={vegCheeseBurger.quantity}
                    img={burger2}
                    increment={() => increment(2)}
                    decrement={() => decrement(2)}
                />
                <CartItem
                    title={"Veg Cheese Burger With Fries"}
                    value={burgerWithFries.quantity}
                    img={burger3}
                    increment={() => increment(3)}
                    decrement={() => decrement(3)}
                />
                <article>
                    <div>
                        <h4>Sub Total</h4>
                        <p>₹ {subTotal}</p>
                    </div>
                    <div>
                        <h4>Tax</h4>
                        <p>₹ {tax}</p>
                    </div>
                    <div>
                        <h4>Shipping Charges</h4>
                        <p>₹ {shippingCharges}</p>
                    </div>
                    <div>
                        <h4>Total</h4>
                        <p>₹ {total}</p>
                    </div>
                    <Link to={"/shipping"}>Checkout</Link>
                </article>
            </main>
        </section>
    );
}
const CartItem = ({ value = 1, title, img, increment, decrement }) => (
    <div className="cartItem">
        <div>
            <h4>{title}</h4>

            <img
                src={img}
                alt="Item"
            />
        </div>
        <div>
            <button onClick={decrement}>-</button>
            <input
                type="number"
                readOnly
                value={value}
            />
            <button onClick={increment}>+</button>
        </div>
    </div>
);

export default Cart;
