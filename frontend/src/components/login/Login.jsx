/** @format */

import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { server } from "../../redux/store";

function Login() {
    const LoginHndler = () => {
        try {
            window.open(`${server}/googlelogin`, "_self");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="login">
            <motion.button
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={LoginHndler}>
                Login With Google
                <FcGoogle />
            </motion.button>
        </section>
    );
}

export default Login;
