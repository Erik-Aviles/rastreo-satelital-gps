import React from 'react';
import '../styles/Search.css'
import {TfiClose} from 'react-icons/tfi';

const Search = () => {
  return (
    <div className='Search' > 
        <input
        className='input-search'
          type="search"
          id="search-device"
          name="search-device"
          value="Buscar"
        />
      </div>
  )
}

export default Search