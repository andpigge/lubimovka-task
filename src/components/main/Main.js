import React from 'react';
import './main.css';

// Компоненты
import Search from '../search/Search';
import PieceCardList from '../piece-card-list/PieceCardList';
import AuthorList from '../authorList/AuthorList';

function Main() {
  return (
    <main className='content'>
      <Search />
      <section className='piece-result'>
        <PieceCardList />
        <AuthorList />
      </section>
    </main>
  );
}

export default Main;
