/** @format */

import React from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

function Footer() {
    return (
        <footer>
            <div>
                <h2>MBA Burger Wala</h2>
                <p>We are trying to give you the best taste possible.</p>
                <br />
                <em>We give attention to genuine feedback</em>
                <strong>All Right Received @mbaburgerwala</strong>
            </div>
            <aside>
                <h4>Follow Us</h4>
                <a href="http://instagram.com/mekrishna40">
                    <AiFillInstagram />
                </a>
                <a href="http://github.com/krishnakolpte">
                    <AiFillGithub />
                </a>
            </aside>
        </footer>
    );
}

export default Footer;
