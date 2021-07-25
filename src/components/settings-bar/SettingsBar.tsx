import React from 'react';
import style from './settings-bar.module.scss'
import CreateInput from "./create-input/CreateInput";
import WorkingOn from "./working-on/WorkingOn";
import TagsBlock from "../tags-block/TagsBlock";

const SettingsBar: React.FC = () => {
    const myTagArray = [
        {isCommunity: false, title: 'Twitter'},
        {isCommunity: false, title: 'Social Media'},
        {isCommunity: false, title: 'Top 10'},
        {isCommunity: false, title: 'Finances'},
        ];
    const communityTagArray = [
        {isCommunity: true, title: 'Social'},
        {isCommunity: true, title: 'Top 100'},
        {isCommunity: true, title: 'Testing'},
        {isCommunity: true, title: 'Favourites'},
        ];

    return (
        <div className={style.wrapper}>
            <button className={style.closeBtn} />
            <h2 className={style.title}>Dapplet Settings</h2>
            <div className={style.inputsWrapper}>
                <CreateInput title={'Create new list'} placeholder={'List Name'} />
                <CreateInput title={'New tag'} placeholder={'Application name'} />
            </div>
            <div className={style.tagsWrapper}>
                <h2 className={style.titleTags}>My tags</h2>
                <TagsBlock  tagsArray={myTagArray} margin='0 11px 20px 0'/>
                <h2 className={style.titleTags}>Community tags</h2>
                <TagsBlock tagsArray={communityTagArray} margin='0 11px 20px 0'/>
            </div>
            <WorkingOn />
        </div>
    );
};

export default SettingsBar;