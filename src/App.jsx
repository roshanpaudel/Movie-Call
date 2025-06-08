import "./App.css";
import { Hero } from "./components/Hero";
import { Display } from "./components/Display";
import { useState } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addToMovieList = (movie) => {
    setMovieList([...movieList, movie]);
  };
  return (
    <div className="wrapper">
      <Hero addToMovieList={addToMovieList} />
      <Display movieList={movieList} />
    </div>
  );
}

export default App;
