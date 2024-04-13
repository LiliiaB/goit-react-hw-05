import { useState, useEffect } from "react";

import MovieList from "../components/MovieList/MovieList";
import { trendingMovies } from "../components/API/api";
import { Loader } from "../components/Loader/Loader";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchTrendingMovies = async () => {
      try {
        const data = await trendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      } finally {
        setLoader(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {loader && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
