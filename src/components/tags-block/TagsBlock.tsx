import React from 'react';
import style from './tags-block.module.scss';
import Tag from "../tag/Tag";

interface TagsBlockProps {
    tagsArray: TagObj[];
    margin: string;
}
interface TagObj  {
    isCommunity: boolean;
    title: string;
}

const TagsBlock: React.FC<TagsBlockProps> = ({tagsArray,margin}) => {
    const tag = tagsArray.map(tagObj => {
            return <Tag tag={tagObj.title} isCommunity={tagObj.isCommunity}
                        margin={margin} key={new Date().toLocaleString()}/>
        })
    return (
        <div className={style.tagsWrapper}>
            {tag}
        </div>
);
};

export default TagsBlock;