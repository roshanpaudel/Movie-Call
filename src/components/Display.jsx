import React from "react";
import { MovieCard } from "./MovieCard";

export const Display = () => {
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
        <div className="row ">
          <div className="col movie-card-content">
            <MovieCard />
          </div>
        </div>
      </div>
    </div>
  );
};
