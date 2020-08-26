import React, { useState } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar';

// OMDb api
// http://www.omdbapi.com/?i=tt3896198&apikey=a327f185
export interface MovieProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series";
  Poster: string;
}

interface MoviesListProps extends Array<MovieProps> { }

export default function App() {
  const [movies, setMovies] = useState<MoviesListProps | []>([]);

  const handleTerm = (str: string) => {
    console.log(str)
  }

  return <div>The Shoppies
    <Searchbar handleTerm={handleTerm} />
  </div>
} 