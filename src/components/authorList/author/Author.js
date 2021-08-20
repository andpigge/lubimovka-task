import React from 'react';
import './author.css';

function Author({ author }) {
  const {
    author_firstName,
    author_lastName,
  } = author;

  return (
    <>
      <li className='author-piece__item'>
        { author_firstName } { author_lastName }
      </li>
    </>
  );
}

export default Author;
