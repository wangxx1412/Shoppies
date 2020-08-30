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

  // useEffect(() => {
  //   console.log(movies);
  // }, [movies])

  const handleTerm = (term: string) => {
    if (term !== "") {
      axios
        .get(`http://www.omdbapi.com/?s=${term}&apikey=a327f185`)
        .then((res: AxiosResponse) => {
          const fetchedMovies = res.data as MoviesListProps;
          setMovies(fetchedMovies);
        })
        .catch((error) => {
          console.log(error)
        });
    }
  }

  return <div>The Shoppies
    <Searchbar handleTerm={handleTerm} />
    <Results movies={movies} />
  </div>
} 