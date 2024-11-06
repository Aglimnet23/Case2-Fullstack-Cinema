import React from "react";

const MovieCard = ({ title, description }) => {
  return (
    <>
      <div className="movie-card" style={styles.card}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "10px",
    textAlign: "center",
    width: "200px",
  },
};
