import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Searchbar } from './Searchbar';
import { Results } from "./Results";

require('dotenv').config();

export interface MovieProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series";
  Poster: string;
}

export interface MoviesListProps extends Array<MovieProps> { }

export default function App() {
  const [movies, setMovies] = useState<MoviesListProps | []>([]);
  const [term, setTerm] = useState<string>("")
  const [error, setError] = useState<string | null>(null)

  // Get data from API  
  const handleTerm = (term: string) => {
    setTerm(term);
    axios
      .get(`https://www.omdbapi.com/?s=${term}&apikey=${process.env.API_KEY}`)
      .then((res: AxiosResponse) => {
        if (res.data.Error) {
          setError(res.data.Error);
          setMovies([]);
        } else {
          setMovies(res.data.Search);
          setError(null);
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return <div className="app">
    <div className="hero">
      <h1 className="title font-italic pt-sm-5">The Shoppies</h1>
      <Searchbar handleTerm={handleTerm} />
    </div>
    <Results movies={movies} term={term} error={error} />
  </div>
} 