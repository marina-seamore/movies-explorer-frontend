import React from 'react';
import './Navigation.css';

function Navigation({ isLoggedIn }) {
    const moviesText = `${isLoggedIn ? 'Фильмы' : ''}`;
    const saveMoviesText = `${isLoggedIn ? 'Сохранённые фильмы' : ''}`;

    const [popupIsOpened, setPopupIsOpened] = React.useState(false);

    function isOpen() {
        setPopupIsOpened(true);
    };
    function onClose() {
        setPopupIsOpened(false);
    };

    React.useEffect(() => {
        if (!popupIsOpened) return;
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose()
            }
        }
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc)
        }
    }, [popupIsOpened])

    const handleOverlayClose = (e) => {
        if (e.target === e.currentTarget && popupIsOpened) {
            onClose();
        }
    };

    return (
        <nav className='nav'>
            <div className='nav__film-links'>
                <a href='/movies' className='nav__film-link nav__film-link_bold'>{moviesText}</a>
                <a href='/saved-movies' className='nav__film-link nav__film-link_normal'>{saveMoviesText}</a>
            </div>
            <div className={`${isLoggedIn ? 'none' : 'nav__register'}`}>
                <a className='nav__link nav__link_registration' href='/signup'>Регистрация</a>
                <a className='nav__link nav__link_login' href='/signin'>Войти</a>
            </div>

            <a className={`${isLoggedIn ? 'nav__link nav__account' : 'none'}`}
                href='/profile'>Аккаунт</a>

            <button className={`${isLoggedIn ? 'nav__button' : 'none'}`} onClick={isOpen}></button>

            <div className={`overlay ${popupIsOpened ? 'overlay_on' : ''}`} onMouseDown={handleOverlayClose}>
                <div className='nav__popup'>
                    <button className='nav__popup-close' onClick={onClose}></button>
                    <div className='nav__popup-links'>
                        <a className='nav__link nav__link_popup' href='/'>Главная
                            <figure className='nav__link-line nav__link-line_off' />
                        </a>
                        <a className='nav__link nav__link_popup' href='/movies'>Фильмы
                            <figure className='nav__link-line nav__link-line_active' />
                        </a>
                        <a className='nav__link nav__link_popup' href='/saved-movies'>Сохранённые фильмы
                            <figure className='nav__link-line nav__link-line_off' />
                        </a>
                    </div>
                    <a className='nav__link nav__link_account' href='/profile'>Аккаунт</a>
                </div>
            </div>

        </nav>
    )
}

export default Navigation;
