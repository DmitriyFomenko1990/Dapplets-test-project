import React from 'react';
import style from './SideBar.module.scss'
import Navigation from "./navigation/Navigation";
import TagBlock from "./tags-block/TagBlock";
import MyListsBlock from "./my-lists-block/MyListsBlock";
import SideBarHeader from "./side-bar-header/SideBarHeader";

interface SideBarProps  {
    isOpenSideBar: boolean;
    onHandleClick: (event :React.SyntheticEvent) => void;
};

const SideBar: React.FC<SideBarProps> = ({isOpenSideBar, onHandleClick}) => {

    return (
        <div className={style.wrapper}
             style={{width: isOpenSideBar ? '360px' : '98px'}}>
            <SideBarHeader isOpenSideBar={isOpenSideBar} onHandleClick={onHandleClick} />
            <Navigation isOpenSideBar={isOpenSideBar} onHandleClick={onHandleClick}/>
            <MyListsBlock isOpenSideBar={isOpenSideBar}/>
            <TagBlock isOpenSideBar={isOpenSideBar}/>
        </div>
    );
};

export default SideBar;