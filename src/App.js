import React, { useState, useEffect } from "react";
import { Header, MovieList } from "./Components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [groupedMovies, setGroupedMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `https://wookie.codesubmit.io/movies`;
    const response = await fetch(url, {
      headers: new Headers({
        Authorization: "Bearer Wookie2019",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    });
    const responseJson = await response.json();

    if (responseJson.movies) {
      let group = responseJson.movies.reduce((movieElements, moviesIndex) => {
        console.log('Api responses',responseJson,moviesIndex)
        moviesIndex.genres.map((Moviegenre, MoviegenreIndex) => {
          console.log(' Movie generes --',Moviegenre,MoviegenreIndex)
          movieElements[Moviegenre] = [...(movieElements[moviesIndex.genres[MoviegenreIndex]] || []), moviesIndex];
        });
        return movieElements;
      }, {});
      setGroupedMovies(group);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  console.log('grouped Movies from App.js',groupedMovies);

  return (
    <div className="container-fluid movieApp">
      <Header />
      {Object.keys(groupedMovies).map((key) => (
        <MovieList data={groupedMovies[key]} genre={key} />
      ))}
    </div>
  );
}
