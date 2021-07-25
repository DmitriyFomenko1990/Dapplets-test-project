import React from 'react';
import style from './content.module.scss'
import Searching from "./search-block/Searching";
import AppsBlock from "./apps-block/AppsBlock";

interface ContentProps  {
    isOpenSideBar: boolean;
};


const Content: React.FC<ContentProps> = ({isOpenSideBar}) => {
    return (
        <div className={style.wrapper}>
            <Searching />
            <AppsBlock isOpenSideBar={isOpenSideBar}/>
        </div>
    );
};

export default Content;