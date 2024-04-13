import { Link, useLocation, useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import MovieList from "../components/MovieList/MovieList";
import { searchMovie } from "../components/API/api";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader/Loader";

export const MoviesPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const [moviesList, setMoviesList] = useState([]);

  const movieName = searchParams.get("movieName") ?? "";

  useEffect(() => {
    if (!movieName) return;
    setLoader(true);
    const fetchData = async () => {
      try {
        const data = await searchMovie(movieName);
        setMoviesList(data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [movieName]);

  const onSubmit = (values, { resetForm }) => {
    setSearchParams({ movieName: values.movieName });
    resetForm();
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {loader && <Loader />}
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
