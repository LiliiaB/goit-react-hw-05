import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

import { useEffect, useState } from "react";
import { getMovieDetails } from "../components/API/api";
import css from "./MovieDetailsPage.module.css";

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
      <div className={css.back}>
        <Link to="/">Go back</Link>
      </div>
      {movie && (
        <div className={css.container}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width="250"
          />
          <div className={css.list}>
            <h2 className={css.title}>{movie.title}</h2>
            <p className={css.score}>User Score: {movie.vote_average}</p>
            <h2 className={css.overviewTitle}>Overview</h2>
            <p className={css.overview}>{movie.overview}</p>
            <h2 className={css.genresTitle}>Genres</h2>
            <p className={css.genres}>
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
        </div>
      )}
      {movie && (
        <div className={css.info}>
          <h4 className={css.titleInfo}>Additional information</h4>
          <ul className={css.listInfo}>
            <li>
              <NavLink to={`/movies/${movieId}/cast`} className={css.itemInfo}>
                Movie Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/movies/${movieId}/reviews`}
                className={css.itemInfo}
              >
                Movie Reviews
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MoviesPage;
