import React, {useEffect, useState} from 'react';

import { Header } from'./chat/component/header/header'
import {Chat} from "./chat/chat";


function App() {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        function handleResize() {
            setShowMessage(window.innerWidth <= 700);
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Проверяем состояние сразу при загрузке страницы

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {showMessage ? (
                <div className="message">Простите, у нас есть приложение.</div>
            ) : (
                <>
                    <Header />
                    <Chat />
                </>
            )}
        </>
    );
}

export default App