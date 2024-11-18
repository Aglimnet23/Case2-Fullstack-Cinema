import React, { useEffect, useState } from "react";

const SeatSelection = ({ totalSeats, bookedSeats, onSeatToggle }) => {
  return (
    <div style={styles.container}>
      {Array.from({ length: totalSeats }, (_, i) => {
        const seatNumber = i + 1;
        const isBooked = bookedSeats.includes(seatNumber);
        return (
          <div
            key={seatNumber}
            onClick={() => onSeatToggle(seatNumber)}
            style={{
              ...styles.seat,
              backgroundColor: isBooked ? "red" : "green",
            }}
          >
            {seatNumber}
          </div>
        );
      })}
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
};

export default SeatSelection;
