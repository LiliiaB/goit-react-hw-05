import "./App.css";

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NavBar from "../NavBar/NavBar";
import { Loader } from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReview = lazy(() =>
  import("../../components/MovieReview/MovieReview")
);

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReview />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
