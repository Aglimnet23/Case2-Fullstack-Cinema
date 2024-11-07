import React from "react";

const MovieCard = ({ title, description, genre, director, posterUrl }) => {
  return (
    <>
      <div className="movie-card" style={styles.card}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{genre}</p>
        <p>{director}</p>
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

export default MovieCard;
