import React from 'react';
import s from './chatItemList.module.css'
import {getMessage} from "../message/messages.slice";
import {useAppDispatch} from "../hooks/useAppDispatch";

export const OneChat: React.FC<PropsType> = ({id, src, name, message, time}) => {
    const dispatch= useAppDispatch()
    const onClick = () => {
        dispatch(getMessage(id))
    }
    return (
        <div className={s.one} onClick={onClick}>
            <img style={{width: '40px', height: '40px'}} src={src} alt=""/>
            <div className={s.user}>
                <div className={s.userinfo}>
                    <h3 className={s.name}> {name}</h3>
                    <span className={s.time}>{time}</span></div>

                <div className={s.messege}> {message}</div>
            </div>
        </div>
    );
};
type PropsType = {
    src: string,
    name: any,
    message: string,
    time: number | string
    id: string
}
