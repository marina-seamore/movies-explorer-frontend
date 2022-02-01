import logo from '../../images/logo-web.svg';
import './Promo.css';
import NavTab from '../NavTab/NavTab';
import Container from '../Container/Container';

function Promo() {
    return (
        <section className='promo'>
            <Container>
                <div className='promo__banner'>
                    <img className='promo__logo' src={logo} alt='logo' />
                    <div className='promo__text-container'>
                        <h1 className='promo__title'>
                            Учебный проект студента факультета Веб-разработки.
                        </h1>
                        <p className='promo__text'>
                            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                        </p>
                        < NavTab />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Promo;
