import React, {useEffect, useState} from 'react';
import style from './apps-block.module.scss'
import Application from "./application/Application";
import Loader from "../loader/Loader";
import {useDispatch} from "react-redux";
import {fetchDapplets, fetchDappletsForPagination} from "../../../store/action-creator";
import {useTypedSelector} from "../../../store/redux/combineReducers";
import {DappletType} from "../../../store/redux/dappletsReducerTypes";
import {
    DragDropContext,
    Draggable,
    Droppable,
    DroppableProvided,
    DropResult,
    DraggableProvided} from 'react-beautiful-dnd';

// TODO: d&d refactor

interface AppsBlockProps  {
    isOpenSideBar: boolean;
}

interface Item {
    id: string;
    content: string;
}

const AppsBlock: React.FC<AppsBlockProps> = ({isOpenSideBar}) => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(0)
    const [fetching, setFetching] = useState(true)
    const [DnDState, setDnDState] = useState<any>();

    // useEffect(() => {
    //         function fetch()  {
    //         dispatch(fetchDapplets(page,20,'privacy','DESC'))
    //         }
    //
    //         setPage((prevState)=> prevState + 1 );
    // },[]);

    useEffect( () => {
        if (fetching) {
            dispatch(fetchDappletsForPagination(page,20,'privacy','DESC', dappletsState))
            setPage((prevState)=> prevState + 1 );
            setFetching(false);
            console.log(page)
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
            debugger
            setFetching(true)
        }
    };
    const dappletsState: DappletType[] = useTypedSelector(state => state.dappletReducer.dapplets);

    const reorder = (list: Item[], startIndex: number, endIndex: number):Item[] => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    function onDragEnd(result: DropResult) {
        if (!result.destination) {
            return;
        }
        if (result.destination.index === result.source.index) {
            return;
        }
        const items: Item[] = reorder(
            DnDState.quotes,
            result.source.index,
            result.destination.index
        );

        setDnDState({ items });
    }
    //  const dapplets = dappletsState.map(dap => {
    //     return <Application dapplet={dap} isOpenSideBar={isOpenSideBar}  key={dap.id} />
    // });
    return (
        <div className={style.wrapper} onScroll={onHandleScroll}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='dapplets'>
                    { (provided: DroppableProvided)  => (
                        <div className={style.dapplets} ref={provided.innerRef}
                                {...provided.droppableProps} >
                            {
                                dappletsState.map((dap, index) => (
                                    <Draggable key={index} draggableId={dap.id} index={index}>
                                        {(providedDraggable:DraggableProvided) => (
                                            <div>
                                                <div ref={providedDraggable.innerRef}
                                                    {...providedDraggable.draggableProps}
                                                    {...providedDraggable.dragHandleProps}>
                                                    <Application dapplet={dap} isOpenSideBar={isOpenSideBar}/>
                                                </div>
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Draggable>
                                    )
                                )
                            }
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            { page < 11
                ? <Loader isFetching={fetching}/>
                : <div/>
            }
        </div>
    );
}

export default AppsBlock;

