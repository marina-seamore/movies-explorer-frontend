import React from 'react';
import Form from '../Form/Form';
import './Login.css';

function Login({ onLogin, toSignup, error }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [disableSubmit, setDisableSubmit] = React.useState(true);
    const [inputError, setInputError] = React.useState('none');

    const inputList = Array.from(document.querySelectorAll('.form__input'));

    /** Input value handlers */
    function handleEmailChange(e) {
        setEmail(e.target.value);
        showInputError(e);
        formValidation();
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
        showInputError(e);
        formValidation();
    }
    function handleSubmit(e) {
        e.preventDefault();
        onLogin({ email, password });
    }

    /** Error functions */
    function showInputError(e) {
        const span = document.querySelector(`.form__span_${e.target.name}`);
        if (!e.target.validity.valid) {
            setInputError('form__error-text');
            span.textContent = e.target.validationMessage;
        } else {
            setInputError('none');
            span.textContent = ''
        }
    };
    function hasInvalidInput(inputs) {
        return inputs.some((item) => {
            return !item.validity.valid
        })
    };
    function formValidation() {
        if (hasInvalidInput(inputList)) {
            setDisableSubmit(true);
        } else { setDisableSubmit(false) }
    }

    return (
        <Form
            header={({ text: `Рады видеть!`, align: '' })}
            submit={({ name: 'login', text: 'Войти' })}
            link={({ name: 'redirect', text: 'Ещё не зарегистрированы?', onClick: toSignup })}
            span={({ text: 'Регистрация', active: '_active' })}
            onSubmit={handleSubmit}
            disableSubmit={disableSubmit}
            error={error}
        >

            <label className='form__label'>E-mail</label>
            <input type='email'
                className='form__input'
                name='email'
                value={email || ''}
                onChange={handleEmailChange}
                required />
            <span className={`form__span_email ${inputError}`}></span>

            <label className='form__label'>Пароль</label>
            <input type='password'
                className='form__input'
                name='password'
                value={password || ''}
                onChange={handlePasswordChange}
                minLength='4'
                required />
            <span className={`form__span_password ${inputError}`}></span>

        </Form>
    )
}

export default Login;