import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
    return (
        <section className='movies'>
            <SearchForm />
            <MoviesCardList state={({ saved: 'saved', save: 'save' })} />
        </section>
    )
}

export default Movies;
