import React from 'react';
import style from './settings-bar.module.scss'
import CreateInput from "./create-input/CreateInput";
import SettingTagsBlock from "./tags-block/SettingTagsBlock";
import WorkingOn from "./working-on/WorkingOn";

const SettingsBar = () => {
    const myTagArray = ['Twitter', 'Social Media', 'Top 10', 'Finances'];
    const communityTagArray = ['Social', 'Top 100', 'Testing', 'Favourites'];

    return (
        <div className={style.wrapper}>
            <button className={style.closeBtn} />
            <h2 className={style.title}>Dapplet Settings</h2>
            <div className={style.inputsWrapper}>
                <CreateInput title={'Create new list'} placeholder={'List Name'} />
                <CreateInput title={'New tag'} placeholder={'Tag name'} />
            </div>
            <div className={style.tagsWrapper}>
                <SettingTagsBlock title={'My tags'} tagsArray={myTagArray} isCommunity={false} />
                <SettingTagsBlock title={'Community tags'} tagsArray={communityTagArray} isCommunity={true} />
            </div>
            <WorkingOn />
        </div>
    );
};

export default SettingsBar;