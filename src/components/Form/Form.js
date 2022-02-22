import React from 'react';
import './Form.css';

function Form({ header, onSubmit, submit, link, children, span, disableSubmit, error }) {

    const linkClassName = (`form__link form__link_${link.name}`);
    const submitClassName = (`form__button form__button_${submit.name} ${disableSubmit ? 'form__button_disable' : ''}`);
    const inputsDivClassName = (`form__inputs form__inputs_${submit.name}`);
    const spanClassName = (`form__span form__span${span.active}`);
    const headerClassName = (`form__header ${header.align}`);
    const errorClassName = (`${error? 'form__submit-error' : 'none'}`)

    return (
        <form className='form' onSubmit={onSubmit} name={submit.name} noValidate>
            <h3 className={headerClassName}>{header.text}</h3>
            <div className={inputsDivClassName}>
                {children}
            </div>
            <p className={errorClassName}>Что-то пошло не так. Пожалуйста, проверьте данные и попробуйте ещё раз</p>
            <button type='submit' className={submitClassName}>
                {submit.text}
            </button>
            <button type='button' className={linkClassName} onClick={link.onClick}>
                {link.text}
                <span className={spanClassName}>{span.text}</span>
            </button>
        </form>
    )
}

export default Form;
