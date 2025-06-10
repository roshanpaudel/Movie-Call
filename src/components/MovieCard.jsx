import React from "react";

export const MovieCard = ({
  searchedMovie,
  handelOnDelete,
  handleOnAddToList,
}) => {
  const { Poster, Title, imdbRating, Plot, genre } = searchedMovie;

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
          {!genre && (
            <div className="d-flex justify-content-between">
              <button
                onClick={() => handleOnAddToList("drama")}
                className="btn btn-warning"
              >
                Drama
              </button>
              <button
                onClick={() => handleOnAddToList("action")}
                className="btn btn-info"
              >
                Action
              </button>
            </div>
          )}
          <div className="d-grid mt-3">
            <button onClick={() => handelOnDelete()} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="row col-md"></div>
    </div>
  );
};
