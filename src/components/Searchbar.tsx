import React, { useState, useEffect } from 'react';

type SearchbarProps = {
  handleTerm: (term: string) => void;
}

export const Searchbar = (props: SearchbarProps) => {
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    const { handleTerm } = props;
    handleTerm(term);
  }, [term])

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTerm(e.currentTarget.value);
  }

  return <div className="searchbar container mt-sm-5">
    <h5>Movie title</h5>
    <input className="form-control form-control-lg shadow p-3 mb-5 bg-white rounded" placeholder="Search..." type="text" value={term} onChange={handleChange} />
  </div>
} 