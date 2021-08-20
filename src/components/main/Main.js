import React from 'react';
import './main.css';

// Компоненты
import Search from '../search/Search';
import PieceCardList from '../piece-card-list/PieceCardList';

function Main() {
  return (
    <main className='content'>
      <Search />
      <PieceCardList />
    </main>
  );
}

export default Main;
