import React from 'react';
import s from './header.module.css'
export const Header = () => {
    return (
        <div className={s.header} >
            <div className={s.all}>All chat</div>
            <div className={s.project}> Great project</div>
        </div>
    );
};

