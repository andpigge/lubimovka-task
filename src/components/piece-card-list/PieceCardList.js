import React, { useContext } from 'react';
import './pieceCardList.css';

// Компоненты
import PieceCard from './piece-card/PieceCard';

// Контекст
import { PieceListContext } from '../../contexts/pieceListContext';

function PieceCardList() {
  // Информация о пьесах
  // const [currentUser, setCurrentUser] = useState({
  //   about: 'Загрузка...',
  //   name: 'Пожалуйста подождите',
  //   avatar: gifPreloader
  // });

  const { result: pieceList } = useContext(PieceListContext);

  return (
    <section className='piece'>
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
