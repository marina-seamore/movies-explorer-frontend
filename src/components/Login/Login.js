import React from 'react';
import Form from '../Form/Form';
import './Login.css';

function Login({ onLogin, toSignup }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        onLogin();
    }

    return (
        <Form
            header={({ text: `Рады видеть!`, align: '' })}
            submit={({ name: 'login', text: 'Войти' })}
            link={({ name: 'redirect', text: 'Ещё не зарегистрированы?', onClick: toSignup })}
            span={({ text: 'Регистрация', active: '_active' })}
            onSubmit={handleSubmit}
        >

            <label className='form__label'>E-mail</label>
            <input type='email' className='form__input' name='form-email' value={email || ''}
                onChange={handleEmailChange} required />
            <span className='form__error-text'></span>
            <label className='form__label'>Пароль</label>
            <input type='password' className='form__input' name='form-password' value={password || ''}
                onChange={handlePasswordChange} required />
            <span className='form__error-text'></span>

        </Form>
    )
}

export default Login;