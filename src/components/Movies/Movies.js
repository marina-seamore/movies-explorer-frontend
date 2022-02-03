import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
    return (
        <main className='movies'>
            <SearchForm />
            <MoviesCardList state={({ saved: 'saved', save: 'save' })} />
            <button className='movies__button'>Ещё</button>
        </main>
    )
}

export default Movies;
