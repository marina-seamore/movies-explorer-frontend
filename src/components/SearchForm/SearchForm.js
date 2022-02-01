import Container from '../Container/Container';
import './SearchForm.css';

function SearchForm() {
    return (
            <Container>
                <form className='search'>
                    <div className='search__field'>
                        <input type='text' className='search__input' placeholder='Фильм' name='movieName' required />
                        <button type='submit' className='search__button'>Поиск</button>
                    </div>
                    <input className='search__slider' type='checkbox' name='shortFilms' id='slider' />
                    <label className='search__label' htmlFor='slider'>Короткометражки</label>
                </form>
                <figure className='search__line' />
            </Container>
    );
};

export default SearchForm;
