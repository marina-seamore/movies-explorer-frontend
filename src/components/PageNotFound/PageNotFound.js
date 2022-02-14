import './PageNotFound.css';

function PageNotFound({ goback }) {
    return (
        <section className='notFound'>
            <h2 className='notFound__title'>404</h2>
            <p className='notFound__text'>Страница не найдена</p>
            <button onClick={goback} className='notFound__back'>Назад</button>
        </section>
    )

}

export default PageNotFound;
