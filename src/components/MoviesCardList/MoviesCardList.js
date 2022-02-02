import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ state }) {
    return (
        <>
            <section className='card-list'>
                <MoviesCard state={state.saved} />
                <MoviesCard state={state.save} />
                <MoviesCard state={state.save} />
                <MoviesCard state={state.save} />
                <MoviesCard state={state.saved} />
                <MoviesCard state={state.saved} />
                <MoviesCard state={state.save} />
                <MoviesCard state={state.saved} />
                <MoviesCard state={state.saved} />
                <MoviesCard state={state.saved} />
            </section>
            <button className='card-list__button'>Ещё</button>
        </>
    )
}

export default MoviesCardList;
