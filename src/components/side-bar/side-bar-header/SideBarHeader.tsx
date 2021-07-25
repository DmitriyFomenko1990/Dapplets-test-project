import React from 'react';
import style from "./side-bar-header.module.scss";
import logo from '../../../img/navigation/RR_Logo.svg';

//TODO: css arrow
interface SideBarHeaderProps  {
    isOpenSideBar: boolean;
    onHandleClick: (event :React.SyntheticEvent) => void;
};

const SideBarHeader: React.FC<SideBarHeaderProps> = ({isOpenSideBar, onHandleClick}) => {
    const styleHead = {
        padding: isOpenSideBar ? '77px 20px 20px 36px' : '77px 23px 20px',
        display: isOpenSideBar ? 'flex' : 'block',
        justifyContent: isOpenSideBar ? 'space-between'  : 'center'
    }
    return (
        <div className={style.head}
            style={styleHead}>
            <div className={style.titleWrapper}>
                <img className={style.titleImg} src={logo} alt={logo}/>
                <h2 className={style.title}
                    style={{opacity: isOpenSideBar ? '1' : '0'}}>
                    Dapplets Project<span className={style.title_dot}>.</span>
                </h2>
            </div>
            <button className={style.closeBtn} onClick={onHandleClick}
                    style={{display: isOpenSideBar ? 'inherit' : 'none'}}/>
        </div>
    );
};

export default SideBarHeader;