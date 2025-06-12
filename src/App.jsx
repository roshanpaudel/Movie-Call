import "./App.css";
import { Hero } from "./components/Hero";
import { Display } from "./components/Display";
import { useEffect, useState } from "react";
import {
  accessFromLocalSession,
  storeInLocalSession,
} from "./utils/localStorage";

function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const mvList = accessFromLocalSession();
    mvList?.length && setMovieList(mvList);
  }, []);
  const addToMovieList = (movie) => {
    const tempMovie = movieList.filter((item) => item.imdbID !== movie.imdbID);
    setMovieList([...tempMovie, movie]);
    storeInLocalSession([...tempMovie, movie]);
  };

  const handleOnDeleteMovie = (imdbID) => {
    const filteredMV = movieList.filter((mv) => mv.imdbID !== imdbID);
    confirm("Are you sure you want to delete this movie from your list?") &&
      setMovieList(filteredMV);
    storeInLocalSession(filteredMV);
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
