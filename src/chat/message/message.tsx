import React from 'react';
import {useAppSelector} from "../store/store";

import s from './message.module.css'

export const Message = () => {
    const messages= useAppSelector(state => state.message)

    return (
        <div>
            {messages.map(m=><div key={m.id}>
                {m.user.you ? <div className={s.you}>
                    <span>{m.created_at}</span>
                        <p>{m.message}</p>

                </div> :
                    <div className={s.friend}>
                        <img src={m.user.avatar} alt=""/>
                       <p>{m.message}</p>

                    </div>}
            </div>)}
        </div>
    );
};

