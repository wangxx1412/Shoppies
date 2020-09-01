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

  return <div className="card">
    <div className="card-body">
      <h5 className="card-title">Movie title</h5>
      <input className="form-control form-control-lg" placeholder="Search..." type="text" value={term} onChange={handleChange} />
    </div>
  </div>
} 