import React, {useState} from 'react';
import style from './SideBar.module.scss'
import Navigation from "./navigation/Navigation";
import TagBlock from "./tags-block/TagBlock";
import MyListsBlock from "./my-lists-block/MyListsBlock";
import SideBarHeader from "./side-bar-heaher/SideBarHeader";


const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const onHandleClick = (event: React.SyntheticEvent) =>{
        debugger
        console.log(event.currentTarget.classList.contains('active'))
        return setIsOpen(!isOpen);
    }
    return (
        <div className={style.wrapper}
             style={{width: isOpen ? '360px' : '98px'}}>
            <SideBarHeader isOpen={isOpen} onHandleClick={onHandleClick} />
            <Navigation isOpen={isOpen} onHandleClick={onHandleClick}/>
            <MyListsBlock isOpen={isOpen}/>
            <TagBlock isOpen={isOpen}/>
        </div>
    );
};

export default SideBar;