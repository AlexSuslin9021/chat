import React, { useState } from 'react';
import s from './input.module.css';
import regular from '../../image/Regular.svg'
import button from '../../image/button.svg'

export const Input = () => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event: React.SyntheticEvent<HTMLDivElement>) => {
        const newText = (event.target as HTMLDivElement).innerText; // Приводим event.target к типу HTMLDivElement
        setInputText(newText);
    };

    return (
        <div className={s.block}>
        <div
            className={s.inputContainer}
            contentEditable={true}
            onInput={handleInputChange}
        >
            {inputText}

        </div >
            <div className={s.image}>
            <img className={s.reg} src={regular} alt=""/>
            <img className={s.btn} src={button} alt=""/>
        </div>
        </div>
    );
};


