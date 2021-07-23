import React from 'react';
import style from './setting-tags-block.module.scss';
import Tag from "../../Tag";

interface SettingTagsBlockProps {
    title: string;
    tagsArray: string[];
    isCommunity: boolean;
}
const SettingTagsBlock: React.FC<SettingTagsBlockProps> = ({title,tagsArray, isCommunity}) => {
    const tag =tagsArray.map(tag => {
            return <Tag tag={tag} isCommunity={isCommunity} key={tag}/>
        })
    return (
        <div>
            <h2 className={style.title}>{title}</h2>
            <div className={style.tagsWrapper}>
                {tag}
            </div>
        </div>
    );
};

export default SettingTagsBlock;