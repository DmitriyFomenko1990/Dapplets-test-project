import React from 'react';
import style from './SideBar.module.scss'
import Navigation from "./navigation/Navigation";
import TagBlock from "./tags-block/TagBlock";
import MyListsBlock from "./my-lists-block/MyListsBlock";
import SideBarHeader from "./side-bar-heaher/SideBarHeader";

const SideBar = () => {
    return (
        <div className={style.wrapper}>
            <SideBarHeader />
            <Navigation />
            <MyListsBlock />
            <TagBlock />
        </div>
    );
};

export default SideBar;