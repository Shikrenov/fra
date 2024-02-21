import {useEffect} from 'react';
 import React from 'react';
 import './App.css';
 import SearchIcon from './search.svg';
const APIUrl = 'http://www.omdbapi.com?apikey=758fccfd';
const movie1 = {
  "Title": "Spiderman the Verse",
  "Year": "2019",
  "imdbID": "tt12122034",
  "Type": "series",
  "Poster": "N/A"
}
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${APIUrl}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }
  useEffect (() => {
    searchMovies ('Spiderman');
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input 
        placeholder="Search for movies"
        value="Spiderman"
        onChange={()=>{}}
        />
        <img
        src={SearchIcon}
        alt="search"
        onClick={()=>{}}
        />
      </div>
      <div className ="container">
        <div classname="movie">
          <p>{movie1.Year}</p>
        </div>
      </div>
    </div>
  );
}
export default App;
