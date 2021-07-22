import React from 'react';
import style from "./side-bar-heaher.module.scss";

const SideBarHeader = () => {
    return (
        <div className={style.head}>
            <div className={style.titleWrapper}>
                <div className={style.titleImg} />
                <h2 className={style.title}>Dapplets Project<span className={style.title_dot}>.</span></h2>
            </div>
            <button className={style.closeBtn}/>
        </div>
    );
};

export default SideBarHeader;