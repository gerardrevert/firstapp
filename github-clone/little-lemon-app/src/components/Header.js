import React from "react";
import Food from "../assets/Food.jpg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="left-side">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat venenatis lorem, vel pulvinar eros dapibus .</p>
                <button><Link to="/booking">Book a table</Link></button>
            </div>
            <div className="right-side">
                <img src={Food} alt="food image of busqetta" />
            </div>
        </header>
    );
};

export default Header;
