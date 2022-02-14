import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css'

function SavedMovies() {
    return (
        <main className='saved-movies'>
            <SearchForm />
            <MoviesCardList state={({saved: 'remove', save: 'remove'})} />
        </main>
    )
}

export default SavedMovies;
