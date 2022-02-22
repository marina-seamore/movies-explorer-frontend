import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies({ onSubmitSearch, movies, isLoading, noMovies, errorCaught, onCardSave, onCardRemove, isSaved, handleCheckbox, checkbox, searchMovieName }) {

    return (
        <main className='movies'>
            <SearchForm
                onSubmitSearch={onSubmitSearch}
                handleCheckbox={handleCheckbox}
                checkbox={checkbox}
                searchMovieName={searchMovieName}
            />
            {isLoading
                ? <Preloader />
                : <MoviesCardList
                    movies={movies}
                    noMovies={noMovies}
                    errorCaught={errorCaught}
                    isSaved={isSaved}
                    onCardRemove={onCardRemove}
                    onCardSave={onCardSave}
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

export default Movies;
