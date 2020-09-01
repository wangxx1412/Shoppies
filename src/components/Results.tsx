import React, { useState } from 'react';
import { MoviesListProps, MovieProps } from "./App"

type ResultsProps = {
  movies: MoviesListProps | [];
  term: string;
  error: string | null;
}

export const Results = (props: ResultsProps) => {
  const [nominated, setNominated] = useState<MoviesListProps>([])
  const { movies, term, error } = props;

  const toggleNomintate = (movie: MovieProps) => {
    if ((nominated).includes(movie)) {
      setNominated(nominated.filter(el => el.imdbID !== movie.imdbID))
    } else {
      setNominated([...nominated, movie]);
    }
  }

  return <div className="row">
    <div className="col-sm">
      {term === "" ? <h3>Results:</h3> : <h3>Results for "{term}":</h3>}

      {(error && term !== "") ? error : (movies as any[]).map((movie) => {
        return <li key={movie.imdbID}>
          {`${movie.Title} (${movie.Year})`}
          <button type="button" className="btn btn-sm btn-primary" onClick={() => toggleNomintate(movie)} disabled={nominated.includes(movie)}>Nominate</button>
        </li>
      })}
    </div>
    <div className="col-sm">
      <h3>Nominations:</h3>
      {(nominated as any[]).map((movie) => {
        return <li key={movie.imdbID}>
          {`${movie.Title} (${movie.Year})`}
          <button type="button" className="btn btn-sm btn-primary" onClick={() => toggleNomintate(movie)}>Remove</button>
        </li>
      })}
    </div>
  </div>
} 