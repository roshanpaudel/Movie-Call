import "./App.css";
import { Hero } from "./components/Hero";
import { Display } from "./components/Display";
import { useState } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addToMovieList = (movie) => {
    const tempMovie = movieList.filter((item) => item.imdbID !== movie.imdbID);
    setMovieList([...tempMovie, movie]);
  };

  const handleOnDeleteMovie = (imdbID) => {
    confirm("Are you sure you want to delete this movie from your list?") &&
      setMovieList(movieList.filter((mv) => mv.imdbID !== imdbID));
  };
  return (
    <div className="wrapper">
      <Hero addToMovieList={addToMovieList} />
      <Display
        movieList={movieList}
        handleOnDeleteMovie={handleOnDeleteMovie}
      />
    </div>
  );
}

export default App;
