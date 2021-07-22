import React from 'react';
import style from './menu-item.module.scss'

type MenuItemProps = {
    logo: any,
    title: string,
    isActive: boolean,
};

const MenuItem = ({logo , title, isActive}:MenuItemProps) => {
    return (
        <div className={isActive ? `${style.item} ${style.item__active}` : style.item}>
            <img className={style.logo} src={logo} />
            <h3 className={isActive ? `${style.title} ${style.title__active}` : style.title}>{title}</h3>
        </div>
    );
};

export default MenuItem;