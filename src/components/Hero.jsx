import React, { useEffect, useRef, useState } from "react";
import { MovieCard } from "./MovieCard";
import { fetchFromAPI } from "../utils/axios";
import { randomChar } from "../utils/random";

export const Hero = ({ addToMovieList }) => {
  const [searchedMovie, setSearchedMovie] = useState({});
  const [bgImg, setBgImg] = useState("");
  const [searching, setSearching] = useState(false);

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
    setSearching(false);
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
    fetchMovie(str);
    console.log(str);
  };

  const handelOnDelete = () => {
    setSearchedMovie({});
    setSearching(true);
  };

  const handleOnAddToList = (genre) => {
    addToMovieList({ ...searchedMovie, genre });
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
        <div className="hero-content mt-3">
          <div className={searching ? "form-center" : "form-top"}>
            {searching && (
              <div className="text-center">
                <h1>Search millions of movies </h1>
                <p> Create your bucket list of movies and share</p>
              </div>
            )}

            <div className="input-group my-5 ">
              <input
                ref={searchRef}
                onFocus={() => setSearching(true)}
                type="text"
                className="form-control"
                placeholder="Search movie by name"
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
            {!searching && (
              <div className="movie-card-content showMovie">
                <MovieCard
                  searchedMovie={searchedMovie}
                  handelOnDelete={handelOnDelete}
                  handleOnAddToList={handleOnAddToList}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
