import React, {Dispatch, SetStateAction } from 'react';
import style from "./side-bar-heaher.module.scss";
import * as events from "events";
//TODO: css arrow

// interface SideBarProps {
//     isOpen: boolean;
//     setState:  React.Dispatch<React.SetStateAction<boolean>>
// };

export interface SideBarProps  {
    isOpen: boolean;
    onHandleClick: (event :React.SyntheticEvent) => void;
};

const SideBarHeader: React.FC<SideBarProps> = ({isOpen, onHandleClick}) => {
    const styleHead = {
        padding: isOpen ?  '77px 20px 20px 36px' : '77px 0 20px',
        justifyContent: isOpen ? 'space-between'  : 'center'
    }
    return (
        <div className={style.head}
            style={styleHead}>
            <div className={style.titleWrapper}>
                <div className={style.titleImg}/>
                <h2 className={style.title}
                    style={{display: isOpen ? 'inherit' : 'none'}}>
                    Dapplets Project<span className={style.title_dot}>.</span>
                </h2>
            </div>
            <button className={style.closeBtn} onClick={onHandleClick}
                    style={{display: isOpen ? 'inherit' : 'none'}}/>
        </div>
    );
};

export default SideBarHeader;