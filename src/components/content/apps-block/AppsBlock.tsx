import React from 'react';
import style from './apps-block.module.scss'
import Application from "./application/Application";
import Loader from "../loader/Loader";

const AppsBlock = () => {
    return (
        <div className={style.wrapper}>
            <Application />
            <Loader />
        </div>
    );
};

export default AppsBlock;