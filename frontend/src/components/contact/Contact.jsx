/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoFastFoodOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function Contact() {
    const { user } = useSelector((state) => state.user);

    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        toast.success("Message Sent Successfully,");
        setEmail("");
        setMessage("");
    };

    const options = {
        left: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            animate: {
                x: 0,
                opacity: 1,
            },
        },
        right: {
            initial: {
                x: "+100%",
                opacity: 0,
            },
            animate: {
                x: 0,
                opacity: 1,
            },
        },
        up: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            animate: {
                y: 0,
                opacity: 1,
            },
        },
    };

    return (
        <section className="contact">
            <motion.form
                {...options.left}
                onSubmit={submitHandler}>
                <h2>Contact Us</h2>
                <input
                    readOnly
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name..."
                />
                <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email..."
                />
                <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="message"
                    cols="30"
                    rows="10"></textarea>
                <motion.button
                    {...options.left}
                    transition={{ delay: 0.6 }}
                    type="submit">
                    Send
                </motion.button>
            </motion.form>
            <motion.div
                {...options.right}
                transition={{ delay: 0.3 }}
                className="formborder">
                <motion.div
                    {...options.up}
                    transition={{ delay: 1 }}>
                    <IoFastFoodOutline />
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Contact;
