import React from 'react';
import style from "./side-bar-heaher.module.scss";
import logo from '../../../img/navigation/RR_Logo.svg';

//TODO: css arrow
export interface SideBarProps  {
    isOpen: boolean;
    onHandleClick: (event :React.SyntheticEvent) => void;
};

const SideBarHeader: React.FC<SideBarProps> = ({isOpen, onHandleClick}) => {
    const styleHead = {
        padding: isOpen ? '77px 20px 20px 36px' : '77px 23px 20px',
        display: isOpen ? 'flex' : 'block',
        justifyContent: isOpen ? 'space-between'  : 'center'
    }
    return (
        <div className={style.head}
            style={styleHead}>
            <div className={style.titleWrapper}>
                <img className={style.titleImg} src={logo} />
                <h2 className={style.title}
                    style={{opacity: isOpen ? '1' : '0'}}>
                    Dapplets Project<span className={style.title_dot}>.</span>
                </h2>
            </div>
            <button className={style.closeBtn} onClick={onHandleClick}
                    style={{display: isOpen ? 'inherit' : 'none'}}/>
        </div>
    );
};

export default SideBarHeader;