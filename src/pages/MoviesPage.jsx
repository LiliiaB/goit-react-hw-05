import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import MovieList from "../components/MovieList/MovieList";
import { searchMovie } from "../components/API/api";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader/Loader";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // setLoader(true);
    const fetchData = async () => {
      try {
        const queryParam = searchParams.get("query");
        const data = await searchMovie(queryParam);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    if (searchParams.has("query")) {
      fetchData();
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    setSearchParams({ query });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loader && <Loader />}
      {error && <p>Some error happened</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
