import React, { useState, useEffect } from 'react';

type SearchbarProps = {
  handleTerm: (term: string) => void;
}

export const Searchbar = (props: SearchbarProps) => {
  const [term, setTerm] = useState<string>("");

  const { handleTerm } = props;

  useEffect(() => {
    handleTerm(term);
  }, [term, handleTerm])

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTerm(e.currentTarget.value);
  }

  return <div>
    <input type="text" value={term} onChange={handleChange} />
  </div>
} 