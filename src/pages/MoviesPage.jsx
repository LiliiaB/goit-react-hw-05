import { Link, useLocation, useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import MovieList from "../components/MovieList/MovieList";
import { searchMovie } from "../components/API/api";
import { useEffect, useState } from "react";

export const MoviesPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);

  const movieName = searchParams.get("movieName") ?? "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchMovie(movieName);
        setMoviesList(data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    if (movieName !== "") {
      fetchData();
    } else {
      setMoviesList([]);
    }
  }, [movieName]);

  const handleSubmit = (event) => {
    console.log(handleSubmit);
    event.preventDefault();
    const searchForm = event.currentTarget;
    setSearchParams({ movieName: searchForm.elements.movieName.value });
    searchForm.reset();
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <MovieList movies={moviesList}>
        {moviesList.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </MovieList>
    </div>
  );
};

export default MoviesPage;
