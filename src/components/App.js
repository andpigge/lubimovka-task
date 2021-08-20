import React from 'react';
import './app.css';

// Компоненты
import Main from './main/Main';

// Контекст
import { PieceListContext } from '../contexts/pieceListContext';

// Data
import dataPiece from '../data/pieceList.json';

function App() {
  return (
    <PieceListContext.Provider value={ dataPiece } >
      <Main />
    </PieceListContext.Provider>
  );
}

export default App;
