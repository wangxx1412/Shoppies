import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Searchbar } from './Searchbar';
import { Results } from "./Results";

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

  const handleTerm = (term: string) => {
    setTerm(term);
    if (term !== "") {
      axios
        .get(`http://www.omdbapi.com/?s=${term}&apikey=a327f185`)
        .then((res: AxiosResponse) => {
          if (res.data.Error) {
            setError(res.data.Error);
            setMovies([]);
          } else {
            console.log(res.data.Search);
            setMovies(res.data.Search);
            setError(null);
          }
        })
        .catch((error) => {
          console.log(error)
        });
    }
  }

  return <div>The Shoppies
    <Searchbar handleTerm={handleTerm} />
    <Results movies={movies} term={term} error={error} />
  </div>
} 