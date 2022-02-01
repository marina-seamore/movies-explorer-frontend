import './Footer.css';

function Footer() {
    return (
        <section className="footer">
            <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <figure className='footer__line' />
            <div className='footer__bottom'>
                <p className='footer__date'>&copy; {new Date().getFullYear()}</p>
                <a href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer' className='footer__link'>Яндекс.Практикум</a>
                <a href='https://github.com/Yandex-Practicum' target='_blank' rel='noreferrer' className='footer__link'>Github</a>
                <a href='https://www.facebook.com/yandex.practicum' target='_blank' rel='noreferrer' className='footer__link'>Facebook</a>
            </div>
        </section>
    );
}

export default Footer;
