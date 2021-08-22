import React, { useState, useRef } from 'react';
import './searchForm.css';

function SearchForm({ setSearchValue }) {
  const [valueInput, setValueInput] = useState('');

  // Управляющий компонент
  const handleChangeSearch = (e) => {
    setValueInput(e.target.value);
  }

  // ref
  const inputSearchRef = useRef();
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    // Значение input при submit. Передаю в state
    setSearchValue(inputSearchRef.current.value)
  }

  return (
    <form className='searchForm' name='searchForm' onSubmit={ handleSubmitSearch } >
      <input
        type='text'
        className='searchForm__field-text'
        onChange={ handleChangeSearch }
        value={ valueInput }
        ref={ inputSearchRef }
      />
      <button type='submit' className='searchForm__button-submit'>
        Искать
      </button>
    </form>
  );
}

export default SearchForm;
