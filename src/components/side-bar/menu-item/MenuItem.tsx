import React from 'react';
import style from './menu-item.module.scss'

interface MenuItemProps  {
    logo: any,
    title: string,
    isActive: boolean,
    isOpen: boolean,
    onHandleClick: (event :React.SyntheticEvent) => void
};

const MenuItem: React.FC<MenuItemProps> = ({logo , title, isActive, isOpen,onHandleClick} ) => {
    return (
        <div className={isActive ? `${style.item} ${style.item__active}` : style.item}
            onClick={onHandleClick}>
            <img className={style.logo} src={logo} alt='icon'/>
            <h3 className={isActive ? `${style.title} ${style.title__active}` : style.title}
                style={{opacity: isOpen ? '1' : '0'}}>{title}</h3>
        </div>
    );
};

export default MenuItem;