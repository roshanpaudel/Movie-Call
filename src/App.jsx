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
  return (
    <div className="wrapper">
      <Hero addToMovieList={addToMovieList} />
      <Display movieList={movieList} />
    </div>
  );
}

export default App;
