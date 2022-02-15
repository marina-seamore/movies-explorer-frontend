import React from 'react';
import Container from '../Container/Container';
import './SearchForm.css';

function SearchForm({ onSubmitSearch, checkbox, handleCheckbox }) {

    const [movieName, setMovieName] = React.useState('');

    function handleNameChange(e) {
        setMovieName(e.target.value)
    };

    function handleSubmit(e) {
        e.preventDefault();
        onSubmitSearch(movieName);
    };

    return (
        <Container>
            <form noValidate onSubmit={handleSubmit} className='search'>
                <div className='search__field'>
                    <input type='text' className='search__input' placeholder='Фильм' name='movieName' value={movieName || ''} onChange={handleNameChange} required />
                    <button type='submit' className='search__button'>Поиск</button>
                </div>
                <input className='search__slider' type='checkbox' name='shortFilms' id='slider' defaultChecked={checkbox} onClick={handleCheckbox} />
                <label className='search__label' htmlFor='slider'>Короткометражки</label>
            </form>
            <figure className='line' />
        </Container>
    );
};

export default SearchForm;
