import React, { useContext, useState, useEffect } from 'react';
import './pieceCardList.css';

// Компоненты
import PieceCard from './piece-card/PieceCard';

// Контекст
import { PieceListContext } from '../../contexts/pieceListContext';

// Создание массива пьес
import createPieceList from '../../utils/createPieceList';
// Поиск пьес
import searchPiece from '../../utils/searchPiece';
// Фильтр по имеющим пьесам, для вывода в карточки
import filterResultPiece from '../../utils/filterResultPiece';

function PieceCardList({ searchValue }) {
  const { result } = useContext(PieceListContext);

  // Массив пьес
  const [ pieceList, setPieceList ] = useState([]);
  // Массив отфильтрованных пьес
  const [ pieceListFilter, setPieceListFilter ] = useState([]);
  // Пьесы для вывода в карточки
  const [ pieceListОutput, setPieceListОutput ] = useState([]);

  useEffect(() => {
    // Принимает массив данных. Возвращает массив пьес
    const getPieceList = createPieceList(result);
    setPieceList(getPieceList);
  }, [ searchValue, result ]);

  useEffect(() => {
    // Принимает массив названий пьес и value пьесы для поиска.
    // Возвращает найденный массив пьес, либо пустой массив.
    const resultFilter = searchPiece(pieceList, searchValue);
    setPieceListFilter(resultFilter);
  }, [ pieceList, result ]);

  useEffect(() => {
    // Принимает массив данных и массив отфильтрованных пьес.
    // Возвращает массив для вывода в карточки
    const getPieceListFilter = filterResultPiece(result, pieceListFilter);
    setPieceListОutput(getPieceListFilter);
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
