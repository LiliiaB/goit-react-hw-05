import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={css.list}>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              {movie.title}
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              ></Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
