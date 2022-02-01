import React from 'react';
import Form from '../Form/Form';
import './Register.css';

function Register({ onRegister, toSignin }) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')

    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onRegister();
    }


    return (
        <Form
            header={({ text: `Добро пожаловать!`, align: '' })}
            submit={({ name: 'register', text: 'Зарегистрироваться' })}
            link={({ name: 'redirect', text: 'Уже зарегистрированы?', onClick: toSignin })}
            span={({ text: 'Войти', active: '_active' })}
            onSubmit={handleSubmit}
        >
            <label className='register__label'>Имя</label>
            <input type='text' className='register__input' name='form-name' value={name || ''}
                onChange={handleNameChange} minLength='3' required />
            <span className='register__error-text'></span>
            <label className='register__label'>E-mail</label>
            <input type='email' className='register__input' name='form-email' value={email || ''}
                onChange={handleEmailChange} required />
            <span className='register__error-text'></span>
            <label className='register__label'>Пароль</label>
            <input type='password' className='register__input' name='form-password' value={password || ''}
                onChange={handlePasswordChange} required />
            <span className='register__error-text'></span>
        </Form>
    )
}

export default Register;
