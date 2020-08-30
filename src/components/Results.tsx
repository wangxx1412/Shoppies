import React from 'react';
import { MoviesListProps } from "./App"

type ResultsProps = {
  movies: MoviesListProps | [];
  term: string;
  error: string | null;
}

export const Results = (props: ResultsProps) => {
  const { movies, term, error } = props;

  return <div>
    <h2>Results for "{term}"</h2>
    {error ? error : (movies as any[]).map((movie) => {
      return <li>{movie.Title}</li>
    })}


  </div>
} 