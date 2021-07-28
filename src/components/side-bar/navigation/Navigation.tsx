import React from 'react';
import style from "./navigation.module.scss";
import MenuItem from "../menu-item/MenuItem";
import allDappletsLogo from "../../../img/navigation/menu-item/all-dapplets.svg";
import editorsLogo from "../../../img/navigation/menu-item/editors-choice.svg";
import essentialLogo from "../../../img/navigation/menu-item/essential-dapplets.svg";
import socialLogo from "../../../img/navigation/menu-item/social.svg";
import financialLogo from "../../../img/navigation/menu-item/financial.svg";

interface NavigationProps{
    isOpenSideBar: boolean,
    isOpenMobileSideBar: boolean;
    onHandleClick: (event :React.MouseEvent) => void
}

const Navigation: React.FC<NavigationProps> = ({isOpenSideBar, onHandleClick, isOpenMobileSideBar}) => {
    return (
        <nav className={isOpenMobileSideBar
            ? `${style.navigation__active} ${style.navigation}`
            : style.navigation }>
            <MenuItem logo={allDappletsLogo} title='All Dapplets' isActive={true} isOpenSideBar={isOpenSideBar} onHandleClick={onHandleClick}/>
            <MenuItem logo={editorsLogo} title='Editor’s Choice' isActive={false} isOpenSideBar={isOpenSideBar} onHandleClick={onHandleClick}/>
            <MenuItem logo={essentialLogo} title='Essential Dapplets' isActive={false} isOpenSideBar={isOpenSideBar} onHandleClick={onHandleClick}/>
            <MenuItem logo={socialLogo} title='Social Networks' isActive={false} isOpenSideBar={isOpenSideBar} onHandleClick={onHandleClick}/>
            <MenuItem logo={financialLogo} title='Financial Dapplets' isActive={false} isOpenSideBar={isOpenSideBar} onHandleClick={onHandleClick}/>
        </nav>
    );
};

export default Navigation;