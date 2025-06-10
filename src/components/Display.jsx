import React from "react";
import { MovieCard } from "./MovieCard";

export const Display = ({ movieList }) => {
  return (
    <div className="container mt-5 rounded">
      <div className="bg-dark p-3">
        <div className="row">
          <div className="col">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button class="btn btn-primary" type="button">
                All
              </button>
              <button class="btn btn-warning" type="button">
                Drama
              </button>
              <button class="btn btn-info" type="button">
                Action
              </button>
            </div>
            <div className="mt-3 text-light">2 movies listed</div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col d-flex justify-content-around gap-4 flex-wrap">
            {movieList.map((item, i) => (
              <div className="movie-card-content" key={i}>
                <MovieCard searchedMovie={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
