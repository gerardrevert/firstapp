import React from "react";

import "./BookingForm.css";
import useForm from "../hooks/useForm";



const BookingForm = ({ navigate }) => {
    const {
        form,
        timeSlots,
        isFormValid,
        changeNameHandler,
        changeEmailHandler,
        changeDateHandler,
        changeTimeHandler,
        changeGuestsHandler,
        changeOccasionHandler,
        submitHandler,
    } = useForm();

    function handleSubmit() {
        const response = submitHandler();
        return response ? navigate("/booking-confirmation") : null;
    }
    return (
        <form onSubmit={handleSubmit} className="reservation-form">
            <div className="column">
                <label htmlFor="name">
                    <p>Your Name</p>
                    <input
                        value={form.name}
                        onChange={changeNameHandler}
                        type="text"
                        id="name"
                    />
                </label>
                <label htmlFor="email">
                    <p>Your Email</p>
                    <input
                        value={form.email}
                        onChange={changeEmailHandler}
                        type="email"
                        id="email"
                    />
                </label>
                <label htmlFor="res-date">
                    <p>Choose date</p>
                    <input
                        value={form.date}
                        onChange={changeDateHandler}
                        type="date"
                        id="res-date"
                        placeholder="Date"
                    />
                </label>
                <label htmlFor="res-time">
                    <p>Choose time</p>
                    <select onChange={changeTimeHandler} value={form.time} id="res-time">
                        {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="guests">
                    <p>Number of guests</p>
                    <input
                        value={form.numberOfGuests}
                        onChange={changeGuestsHandler}
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        required
                    />
                </label>
                <label htmlFor="occasion">
                    <p>Occasion</p>
                    <select
                        value={form.occasion}
                        onChange={changeOccasionHandler}
                        id="occasion"
                    >
                        <option value="">None</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>

                    </select>
                </label>
                <div className="submit-container">
                <button disabled={!isFormValid}>Book Table</button>
            </div>
            </div>

        </form>
    );
};

export default BookingForm;
