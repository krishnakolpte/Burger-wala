/** @format */

import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function Menu() {
    const dispatch = useDispatch();

    const addToCart = (itemNum) => {
        switch (itemNum) {
            case 1:
                dispatch({ type: "cheeseBurgerIncreament" });
                toast.success("Added To Cart");
                dispatch({ type: "calculatePrice" });
                break;
            case 2:
                dispatch({ type: "vegCheeseBurgerIncreament" });
                toast.success("Added To Cart");
                dispatch({ type: "calculatePrice" });
                break;
            case 3:
                dispatch({ type: "burgerWithFriesIncreament" });
                toast.success("Added To Cart");
                dispatch({ type: "calculatePrice" });
                break;

            default:
                dispatch({ type: "cheeseBurgerIncreament" });
                toast.success("Added To Cart");
                dispatch({ type: "calculatePrice" });
                break;
        }
    };

    return (
        <section id="menu">
            <h1>MENU</h1>
            <div>
                <MenuCard
                    itemNum={1}
                    imgSrc={burger1}
                    price={199}
                    title={"Cheese Burger"}
                    handler={addToCart}
                    delay={0.1}
                />
                <MenuCard
                    itemNum={2}
                    imgSrc={burger2}
                    price={299}
                    title={"Veg Cheese Burger"}
                    handler={addToCart}
                    delay={0.5}
                />
                <MenuCard
                    itemNum={3}
                    imgSrc={burger3}
                    price={399}
                    title={"Cheese Burger with French Fries"}
                    handler={addToCart}
                    delay={0.8}
                />
            </div>
        </section>
    );
}

export default Menu;
