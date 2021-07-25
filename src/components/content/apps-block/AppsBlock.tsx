import React, {useEffect} from 'react';
import style from './apps-block.module.scss'
import Application from "./application/Application";
import Loader from "../loader/Loader";
import {useDispatch} from "react-redux";
import {fetchDapplets} from "../../../store/action-creator";
import {useTypedSelector} from "../../../store/redux/combineReducers";

const AppsBlock: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDapplets(0,20,'privacy','ASC'));

    },[]);
    const state = useTypedSelector(state => state.dappletReducer)
    const dapplets = state.dapplets.map(dap => {
        return <Application dapplet={dap} key={dap.id}/>
    });
    return (
        <div className={style.wrapper}>
            <div className={style.dapplets}>
                {dapplets}
            </div>

            <Loader />
        </div>
    );
};

export default AppsBlock;