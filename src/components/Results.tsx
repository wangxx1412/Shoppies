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
    {term === "" ? <h3>Results:</h3> : <h3>Results for "{term}":</h3>}

    {(error && term !== "") ? error : (movies as any[]).map((movie) => {
      return <li key={movie.imdbID}>{`${movie.Title} (${movie.Year})`}</li>
    })}
  </div>
} 