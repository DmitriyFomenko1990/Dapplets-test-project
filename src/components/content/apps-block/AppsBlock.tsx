import React, {useEffect, useState} from "react";
import style from "./apps-block.module.scss";
import Application from "./application/Application";
import Loader from "../loader/Loader";
import {useDispatch} from "react-redux";
import {fetchDapplets, fetchFilteredDapplets} from "../../../store/action-creators";
import {useTypedSelector} from "../../../store/redux/combineReducers";
import {DappletState} from "../../../store/redux/dappletsReducerTypes";
import InfiniteScroll from "react-infinite-scroll-component";

interface AppsBlockProps  {
    isOpenSideBar: boolean;
}

const AppsBlock: React.FC<AppsBlockProps> = ({isOpenSideBar}) => {
    const dispatch = useDispatch();
    const [fetching, setFetching] = useState(true);
    const dappletsState: DappletState = useTypedSelector(state => state.dappletReducer);
    const sortType = dappletsState.sort;
    const filter = dappletsState.filter;
    const totalPages = dappletsState.totalPages;
    const page = dappletsState.currentPage;

    useEffect(() => {
        if (fetching) {
                if (filter !== '') {
                    dispatch(fetchFilteredDapplets(page, 10, filter, sortType, dappletsState.dapplets));
                } else {
                    dispatch(fetchDapplets(page,20,sortType, dappletsState.dapplets));
                }
                 setFetching(false);
        }
    },[fetching]);

    useEffect(() => {
         dappletsState.dapplets= [];
            if (filter !== '') {
                dispatch(fetchFilteredDapplets(page, 10, filter, sortType, dappletsState.dapplets));
            } else {
                dispatch(fetchDapplets(page,20,sortType, dappletsState.dapplets));
            }
            setFetching(false);
    },[sortType, filter]);

    const onLoad = () => {
        if (filter !== '') {
            dispatch(fetchFilteredDapplets(page, 10, filter, sortType, dappletsState.dapplets));
        } else {
            dispatch(fetchDapplets(page, 20, sortType, dappletsState.dapplets));
        }
    }

    const dapplets = dappletsState.dapplets.map((dap,index) => {
        return <Application dapplet={dap} isOpenSideBar={isOpenSideBar}  key={index} />
    });
    return (
            <div className={style.wrapper}>
                        <InfiniteScroll
                            dataLength={dapplets.length} //This is important field to render the next data
                            next={onLoad}
                            hasMore={page <= totalPages}
                            loader={<Loader isFetching={true}/>}
                            endMessage={<div>Its all</div>}
                            className={style.dapplets}>
                            {dapplets}
                        </InfiniteScroll>
            </div>
    );
}

export default React.memo (AppsBlock);

