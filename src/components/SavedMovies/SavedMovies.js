import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css'

function SavedMovies() {
    return (
        <section className='saved-movies'>
            <SearchForm />
            <MoviesCardList state={({saved: 'remove', save: 'remove'})} />
        </section>
    )
}

export default SavedMovies;
