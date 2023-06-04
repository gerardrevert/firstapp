import React from "react";

import BookingForm from "../components/BookingForm";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

const Booking = () => {
    const navigate = useNavigate();

    return (
        <main className="booking">


            <h1>Booking</h1>
            <section>
                <BookingForm navigate={navigate} />
            </section>
        </main>
    );
};

export default Booking;
