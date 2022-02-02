import React from 'react';
import Form from '../Form/Form';
import './Profile.css';
import { CurrectUserContext } from '../../context/CurrentUserContext';

function Profile({ onLogout, onEdit }) {
    const currentUser = React.useContext(CurrectUserContext);
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);


    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onEdit();
    }

    return (
        <Form
            header={({ text: `Привет, ${name}!`, align: 'form__header_centre' })}
            submit={({ name: 'edit', text: 'Редактировать' })}
            link={({ name: 'logout', text: 'Выйти из аккаунта', onClick: onLogout })}
            span={({ active: '_disable' })}
            onSubmit={handleSubmit}
        >
            <div className='form__profile-input-box'>
                <label className='form__profile-label'>Имя</label>
                <input type='text' className='form__profile-input' name='form-name' required value={name || ''}
                    onChange={handleNameChange} />
            </div>
            <figure className='form__profile-line' />
            <div className='form__profile-input-box'>
                <label className='form__profile-label'>E-mail</label>
                <input type='email' className='form__profile-input' name='form-email' required value={email || ''}
                    onChange={handleEmailChange} />
            </div>

        </Form>
    )
}

export default Profile;
