import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export const Display = ({ movieList, handleOnDeleteMovie }) => {
  const [displayMovie, setDisplayMovie] = useState([]);
  useEffect(() => {
    setDisplayMovie(movieList);
  }, [movieList]);

  const handleOnFilter = (genre) => {
    if (genre === "all") {
      return setDisplayMovie(movieList);
    }

    setDisplayMovie(movieList.filter((movie) => movie.genre === genre));
  };

  return (
    <div className="container mt-5 ">
      <div className="bg-dark p-3 rounded-4">
        <div className="row">
          <div className="col">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => handleOnFilter("all")}
                className="btn btn-primary"
                type="button"
              >
                All
              </button>
              <button
                onClick={() => handleOnFilter("drama")}
                className="btn btn-warning"
                type="button"
              >
                Drama
              </button>
              <button
                onClick={() => handleOnFilter("action")}
                className="btn btn-info"
                type="button"
              >
                Action
              </button>
            </div>
            <div className="mt-3 text-light">
              {displayMovie.length} movies listed
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col d-flex justify-content-around gap-4 flex-wrap">
            {displayMovie.map((item, i) => (
              <div className="movie-card-content" key={i}>
                <MovieCard
                  searchedMovie={item}
                  handelOnDelete={handleOnDeleteMovie}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
