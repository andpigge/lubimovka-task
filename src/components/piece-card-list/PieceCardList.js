import React, { useContext, useState, useEffect } from 'react';
import './pieceCardList.css';

// Компоненты
import PieceCard from './piece-card/PieceCard';

// Контекст
import { PieceListContext } from '../../contexts/pieceListContext';

// Поиск пьес
import searchPiece from '../../utils/searchPiece';

function PieceCardList({ searchValue, setSearchfound }) {
  // Контекст
  const { result } = useContext(PieceListContext);

  // Пьесы для вывода в карточки
  const [ pieceList, setPieceList ] = useState([]);

  useEffect(() => {
    if (!searchValue) {
      return [];
    }
    const filterPiece = searchPiece(result, searchValue);
    setPieceList(filterPiece)
  }, [ searchValue, result ]);

  useEffect(() => {
    // Если запрос что-то нашел, в searchfound для Search будет true
    if (pieceList.length > 0) {
      return setSearchfound(true);
    }
    setSearchfound(false);
  }, [ pieceList, setSearchfound ]);

  return (
    <section className='piece content_margin_left'>
      <ul className='piece__list'>
        {
          pieceList.map(piece => {
            return <li className='piece__item' key={ piece._id }>
              <PieceCard piece={ piece } />
            </li>
          })
        }
      </ul>
    </section>
  );
}

export default PieceCardList;
