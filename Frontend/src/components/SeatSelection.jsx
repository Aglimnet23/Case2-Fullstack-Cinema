import React, { useEffect, useState } from "react";

const SeatSelection = ({ totalSeats, bookedSeats, onSeatToggle }) => {
  const [bookingMessage, setBookingMessage] = useState("");

  const handleSeatToggle = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) {
      setBookingMessage("This seat is already booked.");
      return;
    }

    // Call the passed in onSeatToggle function
    onSeatToggle(seatNumber);

    // Set the success message
    setBookingMessage("Your seat has been successfully booked!");

    // Clear the message after a few seconds (optional)
    setTimeout(() => {
      setBookingMessage("");
    }, 3000);
  };

  return (
    <div style={styles.container}>
      {Array.from({ length: totalSeats }, (_, i) => {
        const seatNumber = i + 1;
        const isBooked = bookedSeats.includes(seatNumber);
        return (
          <div
            key={seatNumber}
            onClick={() => handleSeatToggle(seatNumber)}
            style={{
              ...styles.seat,
              backgroundColor: isBooked ? "red" : "green",
            }}
          >
            {seatNumber}
          </div>
        );
      })}
      {bookingMessage && <div style={styles.message}>{bookingMessage}</div>}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "300px",
  },
  seat: {
    width: "30px",
    height: "30px",
    margin: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "white",
    borderRadius: "4px",
  },
  message: {
    marginTop: "20px",
    color: "black",
    fontWeight: "bold",
  },
};

export default SeatSelection;
