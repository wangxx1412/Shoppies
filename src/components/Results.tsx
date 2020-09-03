import React, { useState, useEffect } from 'react';
import { MoviesListProps, MovieProps } from "./App"

type ResultsProps = {
  movies: MoviesListProps | [];
  term: string;
  error: string | null;
}

export const Results = (props: ResultsProps) => {
  const [nominated, setNominated] = useState<MoviesListProps>([])
  const { movies, term, error } = props;

  useEffect(() => {
    const nominations = JSON.parse(localStorage.getItem('nominations') as string);
    setNominated(nominations);
  }, []);

  useEffect(() => {
    localStorage.setItem('nominations', JSON.stringify(nominated));
  }, [nominated]);

  const toggleNomintate = (movie: MovieProps) => {
    if ((nominated).includes(movie)) {
      setNominated(nominated.filter(el => el.imdbID !== movie.imdbID))
    } else {
      setNominated([...nominated, movie]);
    }
  }

  return <div className="container">
    <div className="row results mt-md-4">
      <div className="col-sm">
        {term === "" ? <h3>Results:</h3> : <h3>Results for "{term}":</h3>}
        <ul className="list-group list-group-flush">
          {(error && term !== "") ? error : (movies as any[]).map((movie) => {
            return <li key={movie.imdbID} className="list-group-item">
              {`${movie.Title} (${movie.Year})`}
              <button type="button" className="btn btn-sm btn-outline-success ml-sm-2" onClick={() => toggleNomintate(movie)} disabled={nominated.includes(movie)}>Nominate</button>
            </li>
          })}
        </ul>
      </div>
      <div className="col-sm">
        <h3>Nominations:</h3>
        <ul className="list-group list-group-flush">
          {(nominated as any[]).map((movie) => {
            return <li key={movie.imdbID} className="list-group-item">
              {`${movie.Title} (${movie.Year})`}
              <button type="button" className="btn btn-sm btn-outline-danger ml-sm-2" onClick={() => toggleNomintate(movie)}>Remove</button>
            </li>
          })}
        </ul>
      </div>
    </div>
  </div>
} 