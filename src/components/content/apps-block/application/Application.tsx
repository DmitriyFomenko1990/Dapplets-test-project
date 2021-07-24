import React from 'react';
import style from './application.module.scss'
import logo from '../../../../img/content/log-test.svg'
import TagsBlock from "../../../tags-block/TagsBlock";

const Application = () => {
    const TagArray = [
        {isCommunity: false, title: 'Social Media'},
        {isCommunity: false, title: 'Finances'},
        {isCommunity: false, title: 'Twitter'},
        {isCommunity: true, title: 'Top 100'},
    ];
    return (
        <div className={style.wrapper}>
            <div className={style.headBlock}>
                <button className={style.burgerBtn}>
                    <span className={style.burger} />
                </button>
                <img className={style.logo} src={logo} alt={'log'} />
                <div className={style.titleBlock}>
                    <h4>Ethereum Contracts Example</h4>
                    <p className={style.address}>0xC12B5EE8F74BDE56B82EDD9D196D4653DA8E3836</p>
                </div>
                <p className={style.description}>Risus risus integer nunc id at augue arcu dolor viverra lacus.</p>
                <p className={style.source}>debra.holt</p>
                <div className={style.tags}>
                    <TagsBlock tagsArray={TagArray} margin='0 4px 10px 0'/>
                </div>
                <button className={style.installBtn}>Install</button>
            </div>
        </div>
    );
};

export default Application;