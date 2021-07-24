import React from 'react';
import style from './tag.module.scss'

interface tagProps  {
    tag: string,
    isCommunity?: boolean
    margin?: string;
};

const Tag: React.FC<tagProps> = ({tag,isCommunity, margin }) => {
    return (
        <div className={style.wrapper}
                style={{background: isCommunity ? '#41BFB0' : '#5241BF',
                        margin: margin}}>
            <span className={style.title}>{tag}</span>
            <button className={style.closeBtn}/>
        </div>
    );
};

export default Tag;