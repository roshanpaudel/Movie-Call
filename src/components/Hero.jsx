import React, { useEffect, useRef, useState } from "react";
import { MovieCard } from "./MovieCard";
import { fetchFromAPI } from "../utils/axios";
import { randomChar } from "../utils/random";

export const Hero = () => {
  const [searchedMovie, setSearchedMovie] = useState({});
  const [bgImg, setBgImg] = useState("");
  const shouldFetchRef = useRef(true);
  const searchRef = useRef("");
  useEffect(() => {
    if (shouldFetchRef.current) {
      fetchMovie(randomChar());
      shouldFetchRef.current = false;
    }
  }, []);

  const fetchMovie = async (str) => {
    const movie = await fetchFromAPI(str);
    setSearchedMovie(movie);
    setBgImg(movie.Poster);
  };
  const movieStyle = {
    backgroundImage: `url(
      ${bgImg}
    )`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const handleOnSearch = () => {
    const str = searchRef.current.value;
    console.log(str);
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
                ref={searchRef}
                type="text"
                className="form-control"
                placeholder="Enter movie name"
                aria-label="movie name"
                aria-describedby="button-addon"
              />
              <button
                onClick={handleOnSearch}
                className="btn btn-danger"
                type="button"
                id="button-addon"
              >
                Search
              </button>
            </div>
            <div className="movie-card-content">
              <MovieCard searchedMovie={searchedMovie} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
