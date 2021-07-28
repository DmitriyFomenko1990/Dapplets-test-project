import React from 'react';
import style from "./side-bar-header.module.scss";
import logo from '../../../img/navigation/RR_Logo.svg';

//TODO: css arrow
interface SideBarHeaderProps  {
    isOpenSideBar: boolean;
    onHandleClick: (event :React.MouseEvent) => void;
    onMobileHandleClick: (event :React.MouseEvent) => void;
};

const SideBarHeader: React.FC<SideBarHeaderProps> = ({isOpenSideBar, onHandleClick, onMobileHandleClick}) => {
    return (
        <div className={isOpenSideBar
            ? `${style.head_active} ${style.head}`
            : style.head }
            >
            <div className={style.titleWrapper}>
                <img className={style.titleImg} src={logo} alt={logo}/>
                <h2 className={isOpenSideBar
                    ? `${style.title_active} ${style.title}`
                    : style.title }>
                    Dapplets Project<span className={style.title_dot}>.</span>
                </h2>
            </div>
            <button className={isOpenSideBar
                ? `${style.closeBtn_active} ${style.closeBtn}`
                : style.closeBtn }
                onClick={onHandleClick}
            />
            <button className={style.burgerBtn}
                    onClick={onMobileHandleClick}>
                <span className={style.burger}/>
            </button>
        </div>
    );
};

export default SideBarHeader;