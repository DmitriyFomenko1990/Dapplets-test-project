import React from "react";
import style from "./content.module.scss";
import AppsBlock from "./apps-block/AppsBlock";
import SearchingContainer from "./search-block/SearchingContainer";

interface ContentProps  {
    isOpenSideBar: boolean;
}

const Content: React.FC<ContentProps> = ({isOpenSideBar}) => {
    return (
        <div className={style.wrapper} >
            <SearchingContainer />
            <AppsBlock isOpenSideBar={isOpenSideBar}/>
        </div>
    );
};

export default Content;