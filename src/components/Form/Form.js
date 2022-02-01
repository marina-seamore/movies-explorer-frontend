import React from 'react';
import './Form.css';

function Form({ header, onSubmit, submit, link, children, span }) {

    const linkClassName = (`form__link form__link_${link.name}`);
    const submitClassName = (`form__button form__button_${submit.name}`);
    const inputsDivClassName = (`form__inputs form__inputs_${submit.name}`);
    const spanClassName = (`link__span${span.active}`);
    const headerClassName = (`form__header ${header.align}`)

    return (
        <form className='form' onSubmit={onSubmit} name={submit.name}>
            <h3 className={headerClassName}>{header.text}</h3>
            <div className={inputsDivClassName}>
                {children}
            </div>
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
