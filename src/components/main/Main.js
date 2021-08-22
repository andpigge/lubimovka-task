import React, { useState } from 'react';
import './main.css';

// Компоненты
import Search from '../search/Search';
import PieceCardList from '../piece-card-list/PieceCardList';
import AuthorList from '../authorList/AuthorList';

function Main() {
  // Поднял state
  // Значения поля с поиском, при submit
  const [searchValue, setSearchValue] = useState('');
  // Нашелся ли запрос
  const [ searchfound, setSearchfound ] = useState(false);

  return (
    <main className='content'>
      <Search setSearchValue={ setSearchValue } searchValue={ searchValue } searchfound={ searchfound } />
      <section className='piece-result'>
        <PieceCardList searchValue={ searchValue } setSearchfound={ setSearchfound }  />
        <AuthorList searchValue={ searchValue } setSearchfound={ setSearchfound } />
      </section>
    </main>
  );
}

export default Main;
