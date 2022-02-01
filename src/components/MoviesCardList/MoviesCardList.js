import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
    return (
        <section className='card-list'>
            <MoviesCard saved={true}/>
            <MoviesCard saved={false}/>
            <MoviesCard saved={true}/>
            <MoviesCard saved={false}/>
            <MoviesCard saved={false}/>
            <MoviesCard saved={true}/>
            <MoviesCard saved={true}/>
            <MoviesCard saved={true}/>
            <MoviesCard saved={false}/>
            <MoviesCard saved={false}/>
        </section>
    )
}

export default MoviesCardList;
