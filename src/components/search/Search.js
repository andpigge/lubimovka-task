import React from 'react';
import './search.css';

// Компоненты
import SearchForm from './search-form/SearchForm';

function Search() {
  return (
    <section className='search content_margin_left content_margin_right content_margin_bottom'>
      <h1 className='search__title'>
        По запросу «август» мы нашли
      </h1>
      <SearchForm />
    </section>
  );
}

export default Search;
