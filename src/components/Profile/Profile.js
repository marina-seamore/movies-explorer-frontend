import React from 'react';
import Form from '../Form/Form';
import './Profile.css';
import { CurrectUserContext } from '../../context/CurrentUserContext';

function Profile({ onLogout, onEdit }) {
    const currentUser = React.useContext(CurrectUserContext);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [disableSubmit, setDisableSubmit] = React.useState(true);
    const [inputError, setInputError] = React.useState('none');

    const inputList = Array.from(document.querySelectorAll('.form__profile-input'));

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    React.useEffect(() => {
        if (currentUser.name === name && currentUser.email === email) {
            setDisableSubmit(true);
        }
    }, [name, email, currentUser])


    function handleNameChange(e) {
        setName(e.target.value);
        showInputError(e);
        formValidation();
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
        showInputError(e);
        formValidation();
    }
    function handleSubmit(e) {
        e.preventDefault();
        onEdit({ name, email });
    }

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
            header={({ text: `Привет, ${currentUser.name}!`, align: 'form__header_centre' })}
            submit={({ name: 'edit', text: 'Редактировать' })}
            link={({ name: 'logout', text: 'Выйти из аккаунта', onClick: onLogout })}
            span={({ active: '_disable' })}
            onSubmit={handleSubmit}
            disableSubmit={disableSubmit}
        >
            <div className='form__profile-input-box'>
                <label className='form__profile-label'>Имя</label>
                <input
                    type='text'
                    className='form__profile-input'
                    name='name'
                    required
                    minLength='3'
                    maxLength='30'
                    pattern='[\wа-яА-ЯёЁ\s-]{3,30}'
                    value={name || ''}
                    onChange={handleNameChange} />
            </div>
            <span className={`form__span_name ${inputError}`}></span>

            <figure className='form__profile-line' />

            <div className='form__profile-input-box'>
                <label className='form__profile-label'>E-mail</label>
                <input
                    type='email'
                    className='form__profile-input'
                    name='email'
                    required value={email || ''}
                    onChange={handleEmailChange} />

            </div>
            <span className={`form__span_email ${inputError}`}></span>

        </Form>
    )
}

export default Profile;
