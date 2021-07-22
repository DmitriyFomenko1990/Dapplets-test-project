import React from 'react';
import style from "./my-lists-block.module.scss";

const MyListsBlock = () => {
    return (
        <div className={style.userList}>
            <h4>My lists</h4>
            <ul className={style.list}>
                <li className={style.listItem}>TOP-10 Twitter Dapplets (<span className={style.link}>Me</span>)</li>
                <li className={style.listItem}>Best Financial dapplets by Jack (<span className={style.link}>Jack</span>)</li>
                <li className={style.listItem}>TOP-10 Twitter Dapplets (<span className={style.link}>Me</span>)</li>
            </ul>
        </div>
    );
};

export default MyListsBlock;