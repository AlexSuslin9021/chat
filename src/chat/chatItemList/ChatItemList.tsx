import React, {useEffect} from 'react';
import s from './chatItemList.module.css'

import {getDataChat} from "../store/chat";
import {useAppSelector} from "../store/store";
import {OneChat} from "./oneChat";
import {useAppDispatch} from "../hooks/useAppDispatch";


export const ChatItemList = () => {
    const dispatch = useAppDispatch()
    const chatData = useAppSelector(state => state.chat)
    console.log(chatData)

    useEffect(() => {
        dispatch(getDataChat())
    }, [dispatch])

    return (
        <div className={s.chatItem}>
            {Array.isArray(chatData) && chatData.length > 0 ? (
                chatData.map((c) => (
                    <div key={c.id}>
                        {/* Преобразуем Unix timestamp в строку с помощью toLocaleString() */}
                        <OneChat
                            id={c.id}
                            src={c.avatar}
                            name={c.last_message.user_name}
                            time={new Date(c.last_message as any * 1000).toLocaleString()}
                            message={c.last_message.message}
                        />
                    </div>
                ))
            ) : (
                // Добавлен лоадер или информация о загрузке
                <div>Loading...</div>
            )}
        </div>
    );
};




