import React, {useEffect, useState} from 'react';
import style from './apps-block.module.scss'
import Application from "./application/Application";
import Loader from "../loader/Loader";
import {useDispatch} from "react-redux";
import {fetchDapplets, fetchFilteredDapplets, setCurrentPage} from "../../../store/action-creators";
import {useTypedSelector} from "../../../store/redux/combineReducers";
import {DappletState, DappletType} from "../../../store/redux/dappletsReducerTypes";
import Fuse from 'fuse.js';
import { throttle } from 'lodash'

interface AppsBlockProps  {
    isOpenSideBar: boolean;
}
const searchFuzzy = (fuse: any , items: DappletType[], filter:string) => {
     fuse.search(filter);

}
const AppsBlock: React.FC<AppsBlockProps> = ({isOpenSideBar}) => {
    const dispatch = useDispatch()
    const [fetching, setFetching] = useState(true)


    const dappletsState: DappletState = useTypedSelector(state => state.dappletReducer);
    const sortType = dappletsState.sort;
    const filter = dappletsState.filter;
    const totalPages = dappletsState.totalPages;
    const page = dappletsState.currentPage;
    const fuse = new Fuse(dappletsState.dapplets, {
        keys: [
            'title',
            'description',
            'author'
        ]
    });
    console.log(dappletsState)
    console.log(totalPages, page)
    console.log(searchFuzzy(fuse, dappletsState.dapplets, filter))

    useEffect(() => {
        if (dappletsState.dapplets.length !== 0) {
            dappletsState.dapplets = []
            dispatch(setCurrentPage(0))
            if (filter !== '') {
                dispatch(fetchFilteredDapplets(page, 20, filter, sortType, dappletsState.dapplets));
            }else {
                dispatch(fetchDapplets(page,20, sortType, dappletsState.dapplets));
            }
        }
    },[sortType, filter]);

    useEffect(() => {
        if (fetching) {
                if (filter !== '') {
                    dispatch(fetchFilteredDapplets(page, 20, filter, sortType, dappletsState.dapplets));
                } else {
                    dispatch(fetchDapplets(page,20,sortType, dappletsState.dapplets));
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
    }, [fetching])

    const onHandleScroll = throttle(( e: any) => {
        if ( e.target.documentElement.scrollHeight -
            e.target.documentElement.scrollTop - window.innerHeight < 200
             ) {
           setFetching(true)
            console.log(totalPages, page)
        }
    }, 2000,{ 'leading': true, 'trailing': true})

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

