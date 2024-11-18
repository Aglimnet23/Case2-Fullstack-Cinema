import React from "react";
import MovieCard from "./MovieCard"; // Adjust the path as necessary

const MovieList = ({ movies, onMovieSelect }) => {
  return (
    <div style={styles.container}>
      {movies.map((movie) => {
        console.log(movie.id); // Log the ID to check uniqueness
        return (
          // Return the JSX
          <div
            key={movie.id}
            onClick={() => onMovieSelect(movie)}
            style={styles.card}
          >
            <MovieCard
              title={movie.title}
              description={movie.description}
              genre={movie.genre}
              director={movie.director}
              posterUrl={movie.posterUrl}
            />
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
    justifyContent: "center",
  },
  card: {
    cursor: "pointer",
  },
};

export default MovieList;
