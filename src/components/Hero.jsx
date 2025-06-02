import React, { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { fetchFromAPI } from "../utils/axios";
import { randomChar } from "../utils/random";

export const Hero = () => {
  useEffect(() => {
    fetchMovie(randomChar());
  }, []);

  const fetchMovie = async (str) => {
    const movie = await fetchFromAPI(str);
    console.log(movie);
  };
  const movieStyle = {
    backgroundImage: `url(
      "https://www.omdbapi.com/src/poster.jpg"
    )`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div>
      <nav className="py-3 text-danger fixed-top ">
        <h2 className="container">MovieCall</h2>
      </nav>
      <div
        className="hero d-flex justify-content-center align-items-center text-light "
        style={movieStyle}
      >
        <div className="hero-content mt-5">
          <div className="form-center">
            <div className="text-center">
              <h1>Search million of movies </h1>
              <p> Create your bucket list of movies and share</p>
            </div>
            <div className="input-group my-5 ">
              <input
                type="text"
                className="form-control"
                placeholder="Enter movie name"
                aria-label="movie name"
                aria-describedby="button-addon"
              />
              <button
                className="btn btn-danger"
                type="button"
                id="button-addon"
              >
                Button
              </button>
            </div>
            <div className="movie-card-content">
              <MovieCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
