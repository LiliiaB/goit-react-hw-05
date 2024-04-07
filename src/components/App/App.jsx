import "./App.css";

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import SearchBar from "../SearchBar/SearchBar";
import NotFoundPage from "../../pages/NotFoundPage";

const HomePage = lazy(() => import("../../pages/HomePage"));

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
