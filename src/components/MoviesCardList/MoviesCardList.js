import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';


function MoviesCardList({ movies, noMovies, errorCaught, onCardSave, onCardRemove, isSaved }) {

    const page = useLocation().pathname;
    const className = (`card-list ${noMovies || errorCaught ? 'card-list_none' : ''}`);

    const [cardsToShow, setCardsToShow] = React.useState([]);
    const [cardAmount, setCardAmount] = React.useState(0);
    const [moreCards, setMoreCards] = React.useState(0);
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    const checkWindowWidth = () => {
        setWindowWidth(window.innerWidth);
        console.log('resize')
    };

    function handleClickMore() {
        console.log(movies.length)
        setCardsToShow(movies.slice(0, cardsToShow.length + moreCards))
    };

    React.useEffect(() => {

        if (windowWidth > 1200) {
            setCardAmount(12);
            setMoreCards(3);
        } else if (windowWidth > 479) {
            setCardAmount(8);
            setMoreCards(2);
        } else if (windowWidth > 319) {
            setCardAmount(5);
            setMoreCards(2);
        }

    }, [windowWidth]);

    React.useEffect(() => {
        if (page === '/movies') {
            window.addEventListener('resize', checkWindowWidth);
            setCardsToShow(movies.slice(0, cardAmount));
        } else {
            setCardsToShow(movies);
        }
    }, [cardAmount, page, movies])


    return (
        <>
            <section className={className}>
                {cardsToShow.map((item) => (
                    <MoviesCard card={item}
                        key={page === '/movies' ? item.id : item.movieId}
                        isSaved={isSaved}
                        onCardRemove={onCardRemove}
                        onCardSave={onCardSave}
                    />
                ))}
            </section>
            {page === '/movies' && movies.length > cardsToShow.length
                ? <button type='button' onClick={handleClickMore} className='card-list__more-btn'>Ещё</button>
                : ''
            }
        </>
    )
}

export default MoviesCardList;
