import React, { useState, useEffect } from 'react';
import './search.css';

// Компоненты
import SearchForm from './search-form/SearchForm';

function Search({ setSearchValue, searchValue }) {
  const [ searchTitle, setSearchTitle ] = useState('Поиск');

  useEffect(() => {
    searchValue ? setSearchTitle(`По запросу «${searchValue}» мы нашли`) : setSearchTitle(`По запросу «${searchValue}» мы ничего не нашли`);
  }, [ searchValue ]);

  return (
    <section className='search content_margin_left content_margin_right content_margin_bottom'>
      <h1 className='search__title'>
        {/* `По запросу «${setSearchValue}» мы нашли` */}
        {/* { searchValue ? `По запросу «${searchValue}» мы нашли` : `По запросу «${searchValue}» мы ничего не нашли` } */}
        { searchTitle }
      </h1>
      <SearchForm setSearchValue={ setSearchValue } />
    </section>
  );
}

export default Search;
