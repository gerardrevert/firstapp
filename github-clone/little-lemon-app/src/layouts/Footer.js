import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Food from "../assets/Asset 9@4x.png";

const Footer = () => {
    return (
        <footer>
            <nav> <img class="logo" src={Food} alt="little lemon logo" /></nav>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#menu">Menu</a>
                    </li>
                    <li>
                        <Link to="/booking">Reservations</Link>
                    </li>
                    <li>
                        <a href="#order-online">Order Online</a>
                    </li>
                    <li>
                        <a href="#login">Login</a>
                    </li>
                </ul>
            </nav>
            <nav>
                <h3>Contact info</h3>
                <ul>
                    <li>Address: Chicago street #9045</li>
                    <li>Email: contact@littlelemon.com</li>
                </ul>
            </nav>
            <nav>
                <h3>Opening times</h3>
                <ul>
                    <li>Monday - Friday: 9:00 - 22:00</li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
