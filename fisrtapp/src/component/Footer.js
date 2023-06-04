import React from "react";

// Assets
import Logo from "../assets/Asset 16@4x.png";
import "../style/Footer.css";

// Imports
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer>
            <nav>
                <Link to="/">
                    <img  class="logo" src={Logo} alt="Little Lemon Logo" />
                </Link>
            </nav>
            <nav>
                <h3>Navigation</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><a href="#about">Order Online</a></li>
                    <li><a href="#about">Login</a></li>
                </ul>
            </nav>
            <nav>
                <h3>Contact</h3>
                <ul>
                    <li>Monday - Saturday: 10:00 - 22:00</li>
                    <li>Email: contact@littlelemon.com</li>
                </ul>
            </nav>
            <nav>
                <h3>Social Media</h3>
                <ul>
                    <li><a href="https://www.instagram.com"></a> <FontAwesomeIcon icon="fa-brands fa-instagram" /></li>
                    <li><a href="https://www.facebook.com"></a> <FontAwesomeIcon icon="fa-brands fa-facebook" /></li>
                    <li><a href="https://www.linkedin.com"></a> <FontAwesomeIcon icon="fa-brands fa-linkedin" /></li>

                </ul>
            </nav>
        </footer>
    );
};

export default Footer;