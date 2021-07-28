import React from 'react';
import style from './SideBar.module.scss'
import Navigation from "./navigation/Navigation";
import TagBlock from "./tags-block/TagBlock";
import MyListsBlock from "./my-lists-block/MyListsBlock";
import SideBarHeader from "./side-bar-header/SideBarHeader";

interface SideBarProps  {
    isOpenSideBar: boolean;
    isOpenMobileSideBar: boolean;
    onHandleClick: (event :React.MouseEvent) => void;
    onMobileHandleClick: (event :React.MouseEvent) => void;
};

const SideBar: React.FC<SideBarProps> = (
    {
        isOpenSideBar,
        onHandleClick,
        isOpenMobileSideBar,
        onMobileHandleClick
    }) => {
    return (
        <div className={isOpenSideBar
                 ? `${style.wrapper_active} ${style.wrapper}`
                 : style.wrapper }
                 >
            <SideBarHeader onMobileHandleClick={onMobileHandleClick} isOpenSideBar={isOpenSideBar} onHandleClick={onHandleClick} />
            <Navigation isOpenMobileSideBar={isOpenMobileSideBar} isOpenSideBar={isOpenSideBar} onHandleClick={onHandleClick}/>
            <MyListsBlock isOpenSideBar={isOpenSideBar}/>
            <TagBlock isOpenSideBar={isOpenSideBar}/>
        </div>
    );
};

export default SideBar;