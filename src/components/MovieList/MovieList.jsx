import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export const MovieList = ({ movies }) => {
  return (
    <div>
      <ul className={css.list}>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              {movie.title} <Link to={`/movies/${movie.id}`}></Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
