import React, {useEffect} from 'react';
import s from './chatItemList.module.css'

import {getDataChat} from "../store/chat";
import {useAppSelector} from "../store/store";
import {OneChat} from "./oneChat";
import {useAppDispatch} from "../hooks/useAppDispatch";
import dayjs from "dayjs";


export const ChatItemList = () => {
    const dispatch = useAppDispatch()
    const chatData = useAppSelector(state => state.chat)


    useEffect(() => {
        dispatch(getDataChat())
    }, [dispatch])

    return (
        <div className={s.chatItem}>
            {Array.isArray(chatData) && chatData.length > 0 ? (
                chatData.map((c) => {
                    const createdAtDate = dayjs(c.created_at * 1000);
                 return   <div key={c.id}>
                        {/* Преобразуем Unix timestamp в строку с помощью toLocaleString() */}
                        <OneChat
                            lastName={c.last_message.user_surname}
                            id={c.id}
                            src={c.avatar}
                            name={c.last_message.user_name}
                            time={createdAtDate.format('MM:DD')}
                            message={c.last_message.message}
                        />
                    </div>
                })
            ) : (
                // Добавлен лоадер или информация о загрузке
                <div>Loading...</div>
            )}
        </div>
    );
};




