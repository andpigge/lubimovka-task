import React, { useContext } from 'react';
import './authorList.css';

// Компоненты
import Author from './author/Author';

// Контекст
import { PieceListContext } from '../../contexts/pieceListContext';

function AuthorList() {
  // Информация о авторах
  // const [currentUser, setCurrentUser] = useState({
  //   about: 'Загрузка...',
  //   name: 'Пожалуйста подождите',
  //   avatar: gifPreloader
  // });

  const { result: authorList } = useContext(PieceListContext);

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
