import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div style={styles.container}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          description={movie.description}
          genre={movie.genre}
          director={movie.director}
          posterUrl={movie.posterUrl}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "20px",
  },
};
export default MovieList;
