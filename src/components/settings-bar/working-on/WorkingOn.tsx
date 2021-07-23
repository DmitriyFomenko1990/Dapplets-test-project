import React from 'react';
import style from './working-on.module.scss'

const WorkingOn = () => {
    const sources = ['twitter.com', 'twitter.com/randomusername', 'facebook.com', 'facebook.com/randomusername'];
    const sourcesList = sources.map(source => {
        return <li className={style.source} key={source}>{source}</li>
    })
    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>Working on</h2>
            <ul className={style.list}>
                {sourcesList}
            </ul>
        </div>
    );
};

export default WorkingOn;