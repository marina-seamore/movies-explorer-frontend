import logo from '../../images/logo-header.svg'
import './Header.css'

function Header({ onlyLogo }) {
    const headerClassName = (`header ${onlyLogo ? 'header_small' : ''}`)

    return (
        <header className={headerClassName}>
            <a className='header__logo-link' href='/'>
                <img className='header__logo' src={logo} alt='logo' />
            </a>
        </header>
    )
}

export default Header
