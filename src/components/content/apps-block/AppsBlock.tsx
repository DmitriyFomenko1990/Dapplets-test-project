import React, {useEffect, useState} from 'react';
import style from './apps-block.module.scss'
import Application from "./application/Application";
import Loader from "../loader/Loader";
import {useDispatch} from "react-redux";
import {fetchDapplets, fetchDappletsForPagination} from "../../../store/action-creator";
import {useTypedSelector} from "../../../store/redux/combineReducers";
import {DappletType} from "../../../store/redux/dappletsReducerTypes";

interface AppsBlockProps  {
    isOpenSideBar: boolean;
};

const AppsBlock: React.FC<AppsBlockProps> = ({isOpenSideBar}) => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(0)
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
            dispatch(fetchDapplets(page,20,'privacy','DESC'))
            setPage((prevState)=> prevState + 1 );
    },[]);

    useEffect(() => {
        if (fetching) {
            dispatch(fetchDappletsForPagination(page,20,'privacy','DESC', dappletsState))
            setPage((prevState)=> prevState + 1 );
            setFetching(false);
        }
    },[fetching]);

    useEffect(() =>{
        document.addEventListener('scroll', onHandleScroll );
         return function () {
             document.removeEventListener('scroll', onHandleScroll)
        }

    }, [])


    const onHandleScroll = ( e: any) => {
        if (e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + e.target.documentElement.scrollTop) < 100 && page < 11){
            setFetching(true)
        }
    };
    const dappletsState: DappletType[] = useTypedSelector(state => state.dappletReducer.dapplets);

     const dapplets = dappletsState.map(dap => {
        return <Application dapplet={dap} isOpenSideBar={isOpenSideBar}  key={dap.id} />
    });
    return (
        <div className={style.wrapper} onScroll={onHandleScroll}>
            <div className={style.dapplets}>
                {dapplets}
            </div>
            { page < 11
                ? <Loader isFetching={fetching}/>
                : <div></div>
            }
        </div>
    );
}

export default AppsBlock;