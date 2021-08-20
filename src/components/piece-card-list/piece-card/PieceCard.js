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

      </h2>
    </div>
  );
}

export default PieceCard;
