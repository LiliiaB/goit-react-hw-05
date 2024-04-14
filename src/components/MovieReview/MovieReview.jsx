import { useEffect, useState } from "react";
import css from "./MovieReview.module.css";
import { Link, useParams } from "react-router-dom";
import { getMovieReviews } from "../API/api";
import { Loader } from "../Loader/Loader";

export default function MovieReview() {
  const [error, setError] = useState(false);
  const [reviews, setReview] = useState([]);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);
    const fetchDetails = async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        setReview(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchDetails();
  }, [movieId]);

  return (
    <div>
      {loader && <Loader />}

      <ul className={css.list}>
        {reviews.map((review) => {
          return (
            <li key={review.id} className={css.item}>
              <h2 className={css.author}>{review.author}</h2>
              <p className={css.text}>{review.content}</p>
            </li>
          );
        })}
      </ul>

      {error && <p>Some error happened</p>}
    </div>
  );
}
