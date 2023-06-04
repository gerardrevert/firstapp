
import BookingForm from "./components/BookingForm";
import { fireEvent, render, screen } from "@testing-library/react";

// Checks if the time is correct.
test("Updates the time correctly", () => {
    render(<BookingForm />);
    const dateSelector = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateSelector, { target: { value: "2023-02-05" } });
    const timeDropDown = screen.getByLabelText(/Choose time/);
    fireEvent.change(timeDropDown, { target: { value: "17:00" } });
    expect(timeDropDown.value).toEqual("17:00");
});



// Books a reservation correctly.
test("Render for the BookingForm", () => {
    render(<BookingForm />);
    const submitBtn = screen.getByText("Make Reservation");
    expect(submitBtn).toBeInTheDocument();
});


