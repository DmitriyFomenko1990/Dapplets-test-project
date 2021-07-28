import React, {useEffect, useState} from 'react';
import style from './apps-block.module.scss'
import Application from "./application/Application";
import Loader from "../loader/Loader";
import {useDispatch} from "react-redux";
import {fetchDapplets, fetchFilteredDapplets, setCurrentPage} from "../../../store/action-creators";
import {useTypedSelector} from "../../../store/redux/combineReducers";
import {DappletState} from "../../../store/redux/dappletsReducerTypes";

interface AppsBlockProps  {
    isOpenSideBar: boolean;
}

const AppsBlock: React.FC<AppsBlockProps> = ({isOpenSideBar}) => {
    const dispatch = useDispatch()
    const [fetching, setFetching] = useState(false)


    const dappletsState: DappletState = useTypedSelector(state => state.dappletReducer);
    const sortType = dappletsState.sort;
    const filter = dappletsState.filter;
    const totalPages = dappletsState.totalPages;
    const page = dappletsState.currentPage;

    useEffect(() => {
        dappletsState.dapplets = [];
        dispatch(setCurrentPage(0))
        if (filter !== '') {
            dispatch(fetchFilteredDapplets(page, 20, filter, sortType, dappletsState.dapplets))
        }else {
            dispatch(fetchDapplets(page,20, sortType, dappletsState.dapplets))
        }

    },[sortType, filter]);

    useEffect(() => {
        if (fetching) {
                if (filter !== '') {
                     dispatch(fetchFilteredDapplets(page, 20, filter, sortType, dappletsState.dapplets))
                } else {
                    dispatch(fetchDapplets(page,20,sortType, dappletsState.dapplets))
                }
            dispatch(setCurrentPage(page+1 ))
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
            (e.target.documentElement.scrollTop + window.innerHeight) < 100){
            setFetching(true)
        }
    };

    const dapplets = dappletsState.dapplets.map((dap,index) => {
        return <Application dapplet={dap} isOpenSideBar={isOpenSideBar}  key={index} />
    });

    return (
        <div className={style.wrapper} onScroll={onHandleScroll}>
                <div className={style.dapplets}>
                    {dapplets}
                </div>
            { page < totalPages
                ? <Loader isFetching={fetching}/>
                : <div/>
            }
        </div>
    );
}

export default React.memo (AppsBlock);

