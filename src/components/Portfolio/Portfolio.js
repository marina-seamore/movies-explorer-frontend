import Container from "../Container/Container";
import './Portfolio.css'

function Portfolio() {
    return (
        <section className='portfolio'>
            <Container>
                <h2 className='portfolio__title'>Портфолио</h2>
                <div className='portfolio__projects'>
                    <a href='https://marina-seamore.github.io/how-to-learn/' target='_blank' rel='noreferrer' className='portfolio__project-link'>Статичный сайт
                        <span className='portfolio__span'>↗</span>
                    </a>
                    <figure className='portfolio__line' />
                    <a href='https://marina-seamore.github.io/russian-travel/' target='_blank' rel='noreferrer' className='portfolio__project-link'>Адаптивный сайт
                        <span className='portfolio__span'>↗</span>
                    </a>
                    <figure className='portfolio__line' />
                    <a href='https://github.com/marina-seamore/react-mesto-api-full' target='_blank' rel='noreferrer' className='portfolio__project-link'>Одностраничное приложение
                        <span className='portfolio__span'>↗</span>
                    </a>
                </div>
            </Container>
        </section>
    )
}

export default Portfolio;
