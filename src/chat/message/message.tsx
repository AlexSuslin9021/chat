import React from 'react';
import { useAppSelector } from "../store/store";
import s from './message.module.css';
import dayjs from "dayjs";

export const Message = () => {
    const messages = useAppSelector(state => state.message);

    return (
        <div className={s.messageContainer}>
            {
                messages.map(el => {
                    const createdAtDate = dayjs(el.created_at * 1000);
                    if (el.user.you) {
                        return (
                            <div key={el.id} className={`${s.messageWrapper} ${s.i}`}>
                                <p className={`${s.message} ${s.iMessage}`}>{el.message}
                                    <span className={s.time}>{createdAtDate.format('HH:mm')}</span>
                                </p>

                            </div>
                        );
                    } else {
                        return (
                            <div key={el.id} className={`${s.messageWrapper} ${s.friend}`}>
                                <img style={{width:'35px', height:'35px', borderRadius:'5px'}} src={el.user.avatar} alt=""/>
                                 <span> {el.user.name}</span>
                                <p className={`${s.message} ${s.friendMessage}`}>{el.message}
                                    <span className={s.time}>{createdAtDate.format('HH:mm')}</span>
                                </p>
                            </div>
                        );
                    }
                })
            }
        </div>
    );
};






