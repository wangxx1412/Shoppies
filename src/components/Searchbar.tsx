import React, { useState } from 'react';

export default function Searchbar() {
  const [term, setTerm] = useState<string>("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTerm(e.currentTarget.value);
  }
  return <div>
    <input type="text" value={term} onChange={handleChange} />
  </div>
} 