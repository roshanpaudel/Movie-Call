import React from "react";

export const MovieCard = ({ searchedMovie }) => {
  const { Poster, Title, imdbRating, Plot } = searchedMovie;

  return (
    <div className="container">
      <div className="row text-dark p-3">
        <div className="col-md">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md">
          <h3>{Title}</h3>
          <p>IMDB Rating: {imdbRating}</p>
          <p> {Plot?.slice(0, 70) || "No plot available"} ...</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-warning">Drama</button>
            <button className="btn btn-info">Action</button>
          </div>
          <div className="d-grid mt-3">
            <button className="btn btn-danger">Drama</button>
          </div>
        </div>
      </div>
      <div className="row col-md"></div>
    </div>
  );
};
