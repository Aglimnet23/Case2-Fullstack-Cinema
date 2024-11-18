import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList.jsx";
import SeatSelection from "./components/SeatSelection.jsx";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://cinema-api.henrybergstrom.com/api/v1/movies"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    // Load booked seats from local storage when a movie is selected
    const storedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || [];
    setBookedSeats(storedSeats);
  };

  const handleSeatToggle = (seatNumber) => {
    setBookedSeats((prev) => {
      const updatedSeats = prev.includes(seatNumber)
        ? prev.filter((seat) => seat !== seatNumber) // Unbook the seat
        : [...prev, seatNumber]; // Book the seat

      // Save to local storage
      localStorage.setItem("bookedSeats", JSON.stringify(updatedSeats));
      return updatedSeats;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={styles.app}>
      <h1>Movie List</h1>
      <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
      {selectedMovie && (
        <>
          <h2>Selected Movie: {selectedMovie.title}</h2>
          <SeatSelection
            totalSeats={20}
            bookedSeats={bookedSeats}
            onSeatToggle={handleSeatToggle}
          />
        </>
      )}
    </div>
  );
};

const styles = {
  app: {
    textAlign: "center",
    padding: "20px",
  },
};

export default App;
