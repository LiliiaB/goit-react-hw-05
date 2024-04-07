import "./App.css";

import { MovieCast } from "../MovieCast/MovieCast";
import { MovieList } from "../MovieList/MovieList";
import { MovieReview } from "../MovieReview/MovieReview";
import { Navigation } from "../Navigation/Navigation";
import { Routes, Route, NavLink } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage"));

export default function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Home</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <MovieCast />
        <MovieReview />
        <MovieList />
        <Navigation />
      </Routes>
    </>
  );
}
