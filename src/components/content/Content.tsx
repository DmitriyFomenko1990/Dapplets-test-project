import React from 'react';
import style from './content.module.scss'
import Searching from "./search-block/Searching";
import AppsBlock from "./apps-block/AppsBlock";



const Content: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <Searching />
            <AppsBlock />
        </div>
    );
};

export default Content;