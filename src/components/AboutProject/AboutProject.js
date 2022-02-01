import Container from '../Container/Container';
import './AboutProject.css'

function AboutProject() {
    return (
        <section className='about' id='about-project'>
            <Container>

                <h2 className='about__header'>О проекте</h2>
                <figure className='about__line' />
                <ul className='about__plan'>
                    <div className='about__plan-items'>
                        <li className='about__plan-items_large'>Дипломный проект включал 5 этапов</li>
                        <li className='about__plan-items_small'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</li>
                    </div>
                    <div className='about__plan-items'>
                        <li className='about__plan-items_large'>На выполнение диплома ушло 5 недель</li>
                        <li className='about__plan-items_small'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</li>
                    </div>
                </ul>
                <div className='about__time'>
                    <p className='about__time_week about__time_week_1'>1 неделя</p>
                    <p className='about__time_week about__time_week_2'>4 недели</p>
                    <p className='about__time_end'>Back-end</p>
                    <p className='about__time_end'>Front-end</p>
                </div>

            </Container>
        </section>
    );
}

export default AboutProject;