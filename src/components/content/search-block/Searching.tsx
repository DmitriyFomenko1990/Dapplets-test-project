import React from 'react';
import style from './searching.module.scss'
import search from '../../../img/content/searching.svg'

const Searching: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.searchBlock}>
                <img className={style.searchImg} src={search} alt={' '} />
                <input className={style.searchInput} value={'Search'}
                       type='text'/>
            </div>
            <div className={style.sortBlock}>
                <input className={style.releaseDateInput} value={'Release Date'}/>
                <button className={style.inputBtn} />
            </div>
            <div className={style.sortBlock}>
                <input className={style.releaseDateInput} value={'Descending'}/>
                <button className={style.inputBtn} />
            </div>
        </div>
    );
};

export default Searching;