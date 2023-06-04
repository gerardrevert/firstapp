import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";

import Booking from "./pages/Booking";
import { useFormContext } from "./store/FormContext";

function App() {
    const { form } = useFormContext();

    const formProps = {
        name: form.name,
        date: form.date,
        time: form.time,
        guests: form.numberOfGuests,
        occasion: form.occasion,
        table: form.tablePreference,
        request: form.message,
    };

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
