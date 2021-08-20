import React from 'react';
import './searchForm.css';

function SearchForm() {
  return (
    <form className='searchForm'>
      <input type='text' className='searchForm__field-text' />
      <button type='submit' className='searchForm__button-submit'>
        Искать
      </button>
    </form>
  );
}

export default SearchForm;
