import React from 'react';
import style from './loader.module.scss'




const Loader: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <h4>Loading more Dapplets</h4>
            <div className={style.progressBar}>
                <span  className={style.progress}/>
            </div>
        </div>
    );
};

export default Loader;