import React from 'react';
import style from './tag.module.scss'

type tagProps = {
    tag: string,
};

const Tag = (props: tagProps) => {
    return (
        <div className={style.wrap}>
            <span className={style.title}>{props.tag}</span>
            <button className={style.closeBtn}/>
        </div>
    );
};

export default Tag;