import "./App.css";

import { MovieCast } from "../MovieCast/MovieCast";
import { MovieList } from "../MovieList/MovieList";
import { MovieReview } from "../MovieReview/MovieReview";
import { Navigation } from "../Navigation/Navigation";

export default function App() {
  return (
    <>
      <MovieCast />
      <MovieReview />
      <MovieList />
      <Navigation />
    </>
  );
}
