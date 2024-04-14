import { Link, useLocation, useParams } from "react-router-dom";
import MovieCast from "../components/MovieCast/MovieCast";
import MovieReview from "../components/MovieReview/MovieReview";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../components/API/api";

export const MoviesPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const movieDetails = async () => {
      const details = await getMovieDetails(movieId);
      setMovie(details);
    };
    movieDetails();
  }, [movieId]);

  return (
    <>
      <Link to="/">Back to home page</Link>
      <MovieCast />
      <MovieReview />
    </>
  );
};

export default MoviesPage;
