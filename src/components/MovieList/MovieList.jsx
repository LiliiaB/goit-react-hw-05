import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
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
