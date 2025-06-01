import React from "react";
import { MovieCard } from "./MovieCard";

export const Display = () => {
  return (
    <div className="container mt-5">
      <div className="bg-dark p-3">
        <div className="row">
          <div className="col">
            <div class="d-grid gap-2 d-md-block">
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
        <div className="row">
          <div className="col">
            <MovieCard />
          </div>
        </div>
      </div>
    </div>
  );
};
