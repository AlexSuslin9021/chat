import React, { useState } from 'react';
import styles from './input.module.css'; // Импортируем стили из файла

export const Input = () => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event: React.SyntheticEvent<HTMLDivElement>) => {
        const newText = (event.target as HTMLDivElement).innerText; // Приводим event.target к типу HTMLDivElement
        setInputText(newText);
    };

    return (
        <div
            className={styles.inputContainer}
            contentEditable={true}
            onInput={handleInputChange}
        >
            {inputText}
        </div>
    );
};


