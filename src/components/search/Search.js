import React, { useState } from 'react';
import './search.css';

// Компоненты
import SearchForm from './search-form/SearchForm';

function Search({ setSearchValue, searchValue, searchfound }) {
  const [searchTitle, setSearchTitle] = useState('Поиск');

  React.useEffect(() => {
    if (searchfound === true && searchValue) {
      return setSearchTitle(`По запросу «${ searchValue }» мы нашли`);
    }
    if (searchfound === false && searchValue) {
      return setSearchTitle(`По запросу «${ searchValue }» мы ничего не нашли`);
    }
  }, [ searchfound, searchValue ]);

  return (
    <section className='search content_margin_left content_margin_right content_margin_bottom'>
      <h1 className='search__title'>
        { searchTitle }
      </h1>
      <SearchForm
        setSearchValue={ setSearchValue }
        searchfound={ searchfound }
        setSearchTitle={ setSearchTitle }
      />
    </section>
  );
}

export default Search;
