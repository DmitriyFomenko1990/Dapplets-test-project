import React from "react";
import style from "./loader.module.scss";

interface IsFetch {
    isFetching: boolean;
}
const Loader: React.FC<IsFetch> = (isFetching) => {
    return (
        <div className={style.wrapper}>
            <h4>Loading more Dapplets</h4>
            <div className={style.progressBar}>
                <span  className={isFetching
                    ? `${style.progress} ${style.progress_active}`
                    : style.progress}/>
            </div>
        </div>
    );
};

export default Loader;