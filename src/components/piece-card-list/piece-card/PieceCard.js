import React from 'react';
import './pieceCard.css';

function PieceCard({ piece }) {
  const {
    author_firstName,
    author_lastName,
    title,
    city,
    year
  } = piece;

  return (
    <div className='card-piece'>
      <h2 className='card-piece__title'>
        { title }
      </h2>
      <ul className='card-piece__author-list'>
        <li className='card-piece__firstName'>
          { author_firstName }
        </li>
        <li className='card-piece__lastName'>
          { author_lastName }
        </li>
        <li className='card-piece__city'>
          { city }
        </li>
        <li className='card-piece__year'>
          { year }
        </li>
      </ul>
    </div>
  );
}

export default PieceCard;
