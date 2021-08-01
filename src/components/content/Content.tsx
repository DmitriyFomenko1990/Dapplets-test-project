import React from "react";
import style from "./content.module.scss";
import AppsBlock from "./apps-block/AppsBlock";
import SearchContainer from "./search-block/SearchContainer";

interface ContentProps  {
    isOpenSideBar: boolean;
}

const Content: React.FC<ContentProps> = ({isOpenSideBar}) => {
    return (
        <div className={style.wrapper} >
            <SearchContainer />
            <AppsBlock isOpenSideBar={isOpenSideBar}/>
        </div>
    );
};

export default Content;