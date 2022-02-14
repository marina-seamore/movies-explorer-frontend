import './AboutMe.css';
import profilePic from '../../images/profilePic.png'
import Container from '../Container/Container';

function AboutMe() {
    return (
        <section className='aboutme'>
            <Container>
                <h2 className='aboutme__title'>Студент</h2>
                <figure className='aboutme__line' />
                <article className='aboutme__main'>
                    <div className='aboutme__column'>
                        <p className='aboutme__name'>Марина</p>
                        <p className='aboutme__info'>Фронтенд-разработчик, 26 лет</p>
                        <p className='aboutme__text'>Информация обо мне</p>
                        <div className='aboutme__profile-links'>
                            <a href='https://www.facebook.com/marina.peace' target='_blank' rel='noreferrer' className='aboutme__profile-link'>Facebook</a>
                            <a href='https://github.com/marina-seamore' target='_blank' rel='noreferrer' className='aboutme__profile-link'>Github</a>
                        </div>
                    </div>
                    <img className='aboutme__pic' src={profilePic} alt='profile_picture' />
                </article>
            </Container>
        </section>
    );
}

export default AboutMe;
