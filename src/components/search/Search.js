import React, { useState } from 'react';
import './search.css';

// Компоненты
import SearchForm from './search-form/SearchForm';

function Search({ setSearchValue, searchValue, searchfound }) {
  const [searchTitle, setSearchTitle] = useState('Поиск');

  React.useEffect(() => {
    searchfound ?
    setSearchTitle(`По запросу «${ searchValue }» мы нашли`) :
    setSearchTitle(`По запросу «${ searchValue }» мы ничего не нашли`);
  }, [ searchfound, searchValue ]);

  React.useEffect(() => {
    // Изначально в заголовках Поиск
    setSearchTitle('Поиск');
  }, []);

  return (
    <section className='search content_margin_left content_margin_right content_margin_bottom'>
      <h1 className='search__title'>
        { searchTitle }
      </h1>
      <SearchForm setSearchValue={ setSearchValue } searchfound={ searchfound } setSearchTitle={ setSearchTitle } />
    </section>
  );
}

export default Search;
