import React from 'react';
import style from './header.module.scss'

//TODO: change cloud padding
const Header = () => {
    return (
        <header className={style.wrapper}>
            <div className={style.stateWrap}>
                <div className={style.cloudImg} />
                <p className={style.title}>Extension state: <span className={style.state}>Active</span></p>
            </div>
            <div className={style.settings}>
                <div className={style.settingsImg}/>
                <p>Settings</p>
            </div>
        </header>
    );
};

export default Header;