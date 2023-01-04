import React, { useState } from 'react';
import {Button} from "./CssNav"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Buscando: ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Búsqueda:</label>
      <input
        type="search"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button>Búscar</Button>
    </form>
  );
};

export default SearchBar;
