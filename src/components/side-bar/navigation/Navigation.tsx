import React from 'react';
import style from "./navigation.module.scss";
import MenuItem from "../menu-item/MenuItem";
import allDappletsLogo from "../../../img/navigation/menu-item/all-dapplets.svg";
import editorsLogo from "../../../img/navigation/menu-item/editors-choice.svg";
import essentialLogo from "../../../img/navigation/menu-item/essential-dapplets.svg";
import socialLogo from "../../../img/navigation/menu-item/social.svg";
import financialLogo from "../../../img/navigation/menu-item/financial.svg";

const Navigation = () => {
    return (
        <nav className={style.navigation}>
            <MenuItem logo={allDappletsLogo} title='All Dapplets' isActive={true}/>
            <MenuItem logo={editorsLogo} title='Editor’s Choice' isActive={false}/>
            <MenuItem logo={essentialLogo} title='Essential Dapplets' isActive={false}/>
            <MenuItem logo={socialLogo} title='Social Networks' isActive={false}/>
            <MenuItem logo={financialLogo} title='Financial Dapplets' isActive={false}/>
        </nav>
    );
};

export default Navigation;