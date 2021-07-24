import React from 'react';
import style from "./tag-block.module.scss";
import Tag from "../../tag/Tag";

interface TagBlockProps{
    isOpen: boolean
}

const TagBlock: React.FC<TagBlockProps> = ({isOpen}) => {
    return (
        <div className={style.tags}
             style={{display: isOpen ? 'inherit' : 'none'}}>
            <h4 className={style.tagTitle}>My tags</h4>
            <div className={style.tagsWrapper}>
                <Tag tag='Twitter' />
                <Tag tag='Social Media' />
                <Tag tag='Top 10' />
                <Tag tag='Finances' />
                <Tag tag='Media' />
                <Tag tag='Test' />
                <Tag tag='ToDo' />
            </div>
        </div>
    );
};

export default TagBlock;