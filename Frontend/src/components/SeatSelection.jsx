import React, { useEffect, useState } from "react";
// SeatSelection-komponenten tillåter användare att välja platser för en film
const SeatSelection = ({ totalSeats, bookedSeats, onSeatToggle }) => {
  // useState för att hålla reda på meddelandet för bokning
  const [bookingMessage, setBookingMessage] = useState("");

  // Funktion för att hantera växling av platsval
  const handleSeatToggle = (seatNumber) => {
    // Kontrollera om platsen redan är bokad
    if (bookedSeats.includes(seatNumber)) {
      setBookingMessage("This seat is already booked."); // Sätter meddelande om att platsen är bokad
      return;
    }

    // Kallar in onSeatToggle-funktionen för att boka platsen
    onSeatToggle(seatNumber);

    // Sätter meddelande om att platsen har bokats framgångsrikt
    setBookingMessage("Your seat has been successfully booked!");

    // Raderar meddelandet efter några sekunder
    setTimeout(() => {
      setBookingMessage(""); // Återställer meddelandet till tomt
    }, 3000);
  };

  return (
    <div style={styles.container}>
      {/* Skapar en plats för varje nummer upp till totalSeats */}
      {Array.from({ length: totalSeats }, (_, i) => {
        const seatNumber = i + 1; // Platsnumret
        const isBooked = bookedSeats.includes(seatNumber); // Kollar om platsen är bokad
        return (
          <div
            key={seatNumber} // Unikt nyckel för varje plats
            onClick={() => handleSeatToggle(seatNumber)} // Växlar platsval vid klick
            style={{
              ...styles.seat,
              backgroundColor: isBooked ? "red" : "green", // Röd om bokad, grön om ledig
            }}
          >
            {seatNumber} {/* Visar platsnumret */}
          </div>
        );
      })}
      {/* Visar bokningsmeddelande om det finns */}
      {bookingMessage && <div style={styles.message}>{bookingMessage}</div>}
    </div>
  );
};

// Stilar för komponenten
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap", // Gör så att platserna kan brytas till nästa rad
    width: "300px",
  },
  seat: {
    width: "30px",
    height: "30px",
    margin: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer", // Visar att platsen är klickbar
    color: "white",
    borderRadius: "4px", // Rundar hörnen på platserna
  },
  message: {
    marginTop: "20px", // Utrymme ovanför meddelandet
    color: "black",
    fontWeight: "bold", // Gör meddelandet fetstil
  },
};

export default SeatSelection;
