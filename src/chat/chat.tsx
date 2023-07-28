import React from 'react';
import s from './chat.module.css'
import {ChatItemList} from "./chatItemList/ChatItemList";
import {Message} from "./component/message/message";


export const Chat = () => {
    return (
        <div className={s.chat}>
            <ChatItemList/>
            <Message/>
        </div>
    );
};

