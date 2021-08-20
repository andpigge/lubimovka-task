import React from 'react';
import './search.css';

// Компоненты
import SearchForm from './search-form/SearchForm';

function Search() {
  return (
    <section className='search'>
      <h1 className='search__title'>
        Поиск
      </h1>
      <SearchForm />
    </section>
  );
}

export default Search;
