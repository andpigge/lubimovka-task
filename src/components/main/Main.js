import React, { useState } from 'react';
import './main.css';

// Компоненты
import Search from '../search/Search';
import PieceCardList from '../piece-card-list/PieceCardList';
import AuthorList from '../authorList/AuthorList';

function Main() {
  // Поднял state
  // Значения поля с поиском, при submit
  const [searchValue, setSearchValue] = useState(false);

  return (
    <main className='content'>
      <Search setSearchValue={ setSearchValue } searchValue={ searchValue } />
      <section className='piece-result'>
        <PieceCardList searchValue={ searchValue } />
        <AuthorList />
      </section>
    </main>
  );
}

export default Main;
