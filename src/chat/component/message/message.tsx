import React from 'react';
import { useAppSelector } from "../../store/store";
import s from './message.module.css';
import dayjs from "dayjs";
import {Input} from "../input/input";

export const Message = () => {
    const messages = useAppSelector(state => state.message);

    return (<div className={s.container}>
        <div className={s.messageContainer}>
            {
              messages.map(el => {
                    const createdAtDate = dayjs(el.created_at * 1000);
                    if (el.user.you ) {
                        return (
                            <div key={el.id} className={`${s.messageWrapper} ${s.i}`}>
                                <p className={`${s.message} ${s.iMessage}`}>{el.message}
                                    <span className={s.time}>{createdAtDate.format('HH:mm')}</span>
                                </p>

                            </div>
                        );
                    }  else if(!el.user.you && !el.is_new) {
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
                    else if(el.is_new){
                        return <div>
                        <div className={s.newmessege}>
                            <span>Новые сообщения</span>
                        </div>
                            <div key={el.id} className={`${s.messageWrapper} ${s.friend}`}>
                                <img style={{width:'35px', height:'35px', borderRadius:'5px'}} src={el.user.avatar} alt=""/>
                                <span> {el.user.name}</span>
                                <p className={`${s.message} ${s.friendMessage}`}>{el.message}
                                    <span className={s.time}>{createdAtDate.format('HH:mm')}</span>
                                </p>
                            </div>
                        </div>
                  }
                })
            }
        </div>
            {messages.length ?  <Input/>: ''}
        </div>
    );
};






