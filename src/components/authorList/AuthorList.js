import React, { useContext, useState, useEffect } from 'react';
import './authorList.css';

// Компоненты
import Author from './author/Author';

// Контекст
import { PieceListContext } from '../../contexts/pieceListContext';

// Поиск авторов
import searchAuthor from '../../utils/searchAuthor';

function AuthorList({ searchValue, setSearchfound }) {
  // Контекст
  const { result } = useContext(PieceListContext);

  const [ authorList, setAuthorList ] = useState([]);

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    const filterAuthor = searchAuthor(result, searchValue);
    setAuthorList(filterAuthor);
  }, [ searchValue, result ]);

  useEffect(() => {
    // Если запрос что-то нашел, в searchfound для Search будет true
    if (authorList.length > 0) {
      return setSearchfound(true);
    }
    setSearchfound(false);
  }, [ authorList, setSearchfound ]);

  return (
    <section className='author-piece content_margin_right'>
      <ul className='author-piece__list'>
        {
          authorList.map(author => {
            return <Author author={ author } key={ author._id } />
          })
        }
      </ul>
    </section>
  );
}

export default AuthorList;
