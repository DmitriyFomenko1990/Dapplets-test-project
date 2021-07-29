import React from "react";
import style from "./header.module.scss";
import {useTypedSelector} from "../../store/redux/combineReducers";

const Header: React.FC = () => {
    const state = useTypedSelector(state => state.dappletReducer)
    return (
        <header className={style.wrapper}>
            <div className={style.stateWrap}>
                <div className={style.cloudImg} />
                <p className={style.title}>Extension state:
                    { state.isServerError
                        ? <span className={style.error}>Server Error</span>
                        : <span className={style.state}>Active</span>
                    }
                </p>
            </div>
            <div className={style.settings}>
                <div className={style.settingsImg}/>
                <p>Settings</p>
            </div>
        </header>
    );
};

export default Header;