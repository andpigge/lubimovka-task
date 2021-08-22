import React, { useContext, useState, useEffect } from 'react';
import './pieceCardList.css';

// Компоненты
import PieceCard from './piece-card/PieceCard';

// Контекст
import { PieceListContext } from '../../contexts/pieceListContext';

// Фильтр пьес
import searchPiece from '../../utils/searchPiece';

function PieceCardList({ searchValue }) {
  const { result } = useContext(PieceListContext);

  // Массив пьес
  const [ pieceList, setPieceList ] = useState([]);
  // Массив отфильтрованных пьес
  const [ pieceListFilter, setPieceListFilter ] = useState([]);
  // Пьесы для вывода в карточки
  const [ pieceListОutput, setPieceListОutput ] = useState([]);

  // Вынестти в utils
  // Создает массив пьес, заносит в state
  useEffect(() => {
    const pieceList = result.map(piece => {
      return piece.title;
    });

    setPieceList(pieceList);
  }, [ result ]);

  // Когда происходит submit, вызывается функция поиска
  useEffect(() => {
    // Принимает массив названий пьес, и значения для поиска
    const resultFilter = searchPiece(pieceList, searchValue);
    setPieceListFilter(resultFilter);
  }, [ searchValue, pieceList ]);

  // Вынестти в utils
  useEffect(() => {
    const a = result.filter(piece => {
      console.log(pieceListFilter)
      return pieceListFilter.includes(piece.title);
    });
    setPieceListОutput(a);
  }, [ pieceListFilter, result ]);

  return (
    <section className='piece content_margin_left'>
      <ul className='piece__list'>
        {
          pieceListОutput.map(piece => {
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
