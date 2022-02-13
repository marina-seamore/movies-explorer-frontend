import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css'

function SavedMovies({ onSubmitSearch, savedMovies, onCardRemove, isSaved, noMovies, errorCaught, isLoading }) {

    const [checkbox, setCheckbox] = React.useState(false);
    const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);

    function handleCheckbox() {
        setCheckbox(!checkbox)
    }

    React.useEffect(() => {
        checkbox ? setFoundSavedMovies(savedMovies.filter((item) => item.duration <= 40)) : setFoundSavedMovies(savedMovies)
    }, [checkbox, savedMovies]);

    return (
        <main className='saved-movies'>
            <SearchForm
                onSubmitSearch={onSubmitSearch}
                checkbox={checkbox}
                handleCheckbox={handleCheckbox}
            />
            {isLoading
                ? <Preloader />
                : <MoviesCardList
                    movies={foundSavedMovies}
                    onCardRemove={onCardRemove}
                    isSaved={isSaved}
                    noMovies={noMovies}
                    errorCaught={errorCaught}
                />
            }
            {noMovies
                ? <h2 className='movies__error'>Ничего не найдено</h2>
                : ''
            }
            {errorCaught
                ? <h2 className='movies__error'>Во время запроса произошла ошибка.
                    Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h2>
                : ''
            }
        </main>
    )
}

export default SavedMovies;
