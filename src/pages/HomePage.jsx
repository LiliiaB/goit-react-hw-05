import { useState, useEffect } from "react";

import MovieList from "../components/MovieList/MovieList";
import { trendingMovies } from "../components/API/api";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await trendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
