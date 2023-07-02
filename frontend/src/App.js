/** @format */
import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./components/home/Home";
import Footer from "./components/layouts/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";
import Orderdetails from "./components/myOrders/Orderdetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import About from "./components/about/About";
import PagenotFound from "./components/layouts/PagenotFound";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/userActions";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmorder.scss";
import "./styles/paymentsuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";

function App() {
    const dispathch = useDispatch();

    const { error, message, isAuthenticated, user } = useSelector(
        (state) => state.user
    );

    useEffect(() => {
        dispathch(loadUser());
    }, [dispathch]);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispathch({ type: "clearError" });
        }
        if (message) {
            toast.success(message);
            dispathch({ type: "clearMessage" });
        }
    }, [dispathch, error, message]);

    return (
        <>
            <Header isAuthenticated={isAuthenticated} />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/cart"
                    element={<Cart />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/payment/success"
                    element={<PaymentSuccess />}
                />

                <Route
                    path="/login"
                    element={
                        <ProtectedRoute
                            isAuthenticated={!isAuthenticated}
                            redirect={"/me"}>
                            <Login />
                        </ProtectedRoute>
                    }
                />

                <Route
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated} />
                    }>
                    <Route
                        path="/shipping"
                        element={<Shipping />}
                    />
                    <Route
                        path="/confirmorder"
                        element={<ConfirmOrder />}
                    />

                    <Route
                        path="/me"
                        element={<Profile />}
                    />
                    <Route
                        path="/myorders"
                        element={<MyOrders />}
                    />
                    <Route
                        path="/order/:id"
                        element={<Orderdetails />}
                    />
                </Route>

                <Route
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            adminRoute={true}
                            isAdmin={user && user.role === "admin"}
                            redirectAdmin={"/me"}
                        />
                    }>
                    <Route
                        path="/admin/dashboard"
                        element={<Dashboard />}
                    />
                    <Route
                        path="/admin/users"
                        element={<Users />}
                    />
                    <Route
                        path="/admin/orders"
                        element={<Orders />}
                    />
                </Route>

                <Route
                    path="*"
                    element={<PagenotFound />}
                />
            </Routes>
            <Footer />
            <Toaster />
        </>
    );
}

export default App;
