import React from 'react';
import style from './tag.module.scss'

interface tagProps  {
    tag: string,
    isCommunity?: boolean
};

const Tag: React.FC<tagProps> = ({tag,isCommunity }) => {
    return (
        <div className={style.wrap}
                style={{background: isCommunity ? '#41BFB0' : '#5241BF'}}>
            <span className={style.title}>{tag}</span>
            <button className={style.closeBtn}/>
        </div>
    );
};

export default Tag;