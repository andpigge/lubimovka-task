import React, { useEffect, useState } from 'react';
import './author.css';

function Author({ letterAuthor, authorList }) {
  // Найденные авторы по букве
  const [ authorListFilter, setAuthorListFilter ] = useState([]);

  useEffect(() => {
    // Фильтрую авторов по буквам. Записываю в отдельный state
    const authorListFilter = authorList.filter(author => {
      return author[0] === letterAuthor;
    });

    setAuthorListFilter(authorListFilter);
  }, [ letterAuthor, authorList ]);

  return (
    <>
    {/* Буквы */}
    <li className='author-piece__item-letter'>
      <p className='author-piece__text-letter'>
        { letterAuthor }
      </p>
      {/* Авторы */}
      <ul className='author-piece__list-author'>
        {
          authorListFilter.map((item, i) => {
            return <li key={ i } className='author-piece__item-author'>
              { item }
            </li>
          })
        }
      </ul>
    </li>
    </>
  );
}

export default Author;
