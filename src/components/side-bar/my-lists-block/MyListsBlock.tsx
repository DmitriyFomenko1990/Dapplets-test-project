import React from "react";
import style from "./my-lists-block.module.scss";

interface MyListsBlockProps{
    isOpenSideBar: boolean;
}

const MyListsBlock: React.FC<MyListsBlockProps> = ({isOpenSideBar}) => {
    return (
        <div className={style.userList}
             style={{opacity: isOpenSideBar ? '1' : '0'}}>
            <h4 className={style.title}>My lists</h4>
            <ul className={style.list}>
                <li className={style.listItem}>TOP-10 Twitter Dapplets (<span className={style.link}>Me</span>)</li>
                <li className={style.listItem}>Best Financial dapplets by Jack (<span className={style.link}>Jack</span>)</li>
                <li className={style.listItem}>TOP-10 Twitter Dapplets (<span className={style.link}>Me</span>)</li>
            </ul>
        </div>
    );
};

export default MyListsBlock;