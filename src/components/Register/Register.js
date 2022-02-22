import React from 'react';
import Form from '../Form/Form';
import './Register.css';
import Preloader from '../Preloader/Preloader';

function Register({ onRegister, toSignin, errorOnSubmit, isLoading }) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [disableSubmit, setDisableSubmit] = React.useState(true);
    const [inputError, setInputError] = React.useState('none');

    const inputList = Array.from(document.querySelectorAll('.form__register-input'));

    /** Input value handlers */
    function handleNameChange(e) {
        setName(e.target.value);
        showInputError(e);
        formValidation()
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
        showInputError(e);
        formValidation()
    };
    function handlePasswordChange(e) {
        setPassword(e.target.value);
        showInputError(e);
        formValidation()
    };
    function handleSubmit(e) {
        e.preventDefault();
        onRegister({ name, email, password });
    };

    /** Error functions */
    function showInputError(e) {
        const span = document.querySelector(`.form__span_${e.target.name}`);
        if (!e.target.validity.valid) {
            setInputError('form__error-text');
            span.textContent = e.target.validationMessage;
            if (e.target.validity.patternMismatch) {
                span.textContent = 'Please make sure you are using from 3 to 30 of the following symbols: latin or cyrillic characters, space or hypen(-)'
            }
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
            header={({ text: `Добро пожаловать!`, align: '' })}
            submit={({ name: 'register', text: 'Зарегистрироваться' })}
            link={({ name: 'redirect', text: 'Уже зарегистрированы?', onClick: toSignin })}
            span={({ text: 'Войти', active: '_active' })}
            onSubmit={handleSubmit}
            disableSubmit={disableSubmit}
            error={errorOnSubmit}
        >
            {isLoading ? <Preloader /> : ''}
            <label className='form__register-label'>Имя</label>
            <input type='text'
                className='form__register-input'
                name='name'
                value={name || ''}
                onChange={handleNameChange}
                minLength='3'
                maxLength='30'
                pattern='[\wа-яА-ЯёЁ\s-]{3,30}'
                required />
            <span className={`form__span_name ${inputError}`}></span>

            <label className='form__register-label'>E-mail</label>
            <input type='email'
                className='form__register-input'
                name='email'
                value={email || ''}
                onChange={handleEmailChange}
                required />

            <span className={`form__span_email ${inputError}`}></span>
            <label className='form__register-label'>Пароль</label>
            <input type='password'
                className='form__register-input'
                name='password' value={password || ''}
                onChange={handlePasswordChange}
                minLength='4'
                required />
            <span className={`form__span_password ${inputError}`}></span>

        </Form>
    )
}

export default Register;
