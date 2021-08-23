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

  // Найденные авторы по ключевому слову
  const [ authorListSearch, setAuthorListSearch ] = useState([]);
  // Список всех найденных букв в фамилиях авторов
  const [ letterLastNameList, setLetterLastNameList] = useState([]);
  // Список всех найденных авторов. Их фамилия и имя
  const [ initialListAuthor, setInitialListAuthor] = useState([]);

  // Поиск
  useEffect(() => {
    console.log(searchValue)
    if (!searchValue) {
      return;
    }
    // Принимает массив данных и значение поиска.
    // Возвращает найденных авторов по имени и фамилии.
    const filterAuthor = searchAuthor(result, searchValue);
    setAuthorListSearch(filterAuthor);
  }, [ searchValue, result, setSearchfound ]);

  // Первые буквы
  useEffect(() => {
    // Нахожу первые буквы в фамилиях авторов. Записываю в отдельный state
    const letterLastName = authorListSearch.map(piece => {
      return piece.author_lastName[0];
    });
    const uniqLetterLastName = Array.from(new Set(letterLastName)).sort();

    setLetterLastNameList(uniqLetterLastName);
  }, [ authorListSearch ]);

  // Уникальный массив
  useEffect(() => {
    // Создаю уникальный массив авторов. Фамилия и имя
    const authorList = authorListSearch.map(piece => {
      return `${piece.author_lastName} ${piece.author_firstName}`;
    });
    const uniqAuthorList = Array.from(new Set(authorList));

    setInitialListAuthor(uniqAuthorList);
  }, [ authorListSearch ]);

  // Найден ли запрос
  useEffect(() => {
    // Если запрос что-то нашел, в searchfound для Search будет true
    if (authorListSearch.length > 0) {
      return setSearchfound(true);
    }
    setSearchfound(false);
  }, [ authorListSearch, setSearchfound ]);

  return (
    <section className='author-piece content_margin_right'>
      <ul className='author-piece__list-letter'>
        {
          letterLastNameList.map((letter, i) => {
            return <Author
              key={ i }
              letterAuthor={ letter }
              authorList={ initialListAuthor }
            />
          })
        }
      </ul>
    </section>
  );
}

export default AuthorList;
