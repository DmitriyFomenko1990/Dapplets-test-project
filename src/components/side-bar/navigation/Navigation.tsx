import React from 'react';
import style from "./navigation.module.scss";
import MenuItem from "../menu-item/MenuItem";
import allDappletsLogo from "../../../img/navigation/menu-item/all-dapplets.svg";
import editorsLogo from "../../../img/navigation/menu-item/editors-choice.svg";
import essentialLogo from "../../../img/navigation/menu-item/essential-dapplets.svg";
import socialLogo from "../../../img/navigation/menu-item/social.svg";
import financialLogo from "../../../img/navigation/menu-item/financial.svg";

interface NavigationProps{
    isOpen: boolean,
    onHandleClick: (event :React.SyntheticEvent) => void
}

const Navigation: React.FC<NavigationProps> = ({isOpen, onHandleClick}) => {
    return (
        <nav className={style.navigation}>
            <MenuItem logo={allDappletsLogo} title='All Dapplets' isActive={true} isOpen={isOpen} onHandleClick={onHandleClick}/>
            <MenuItem logo={editorsLogo} title='Editor’s Choice' isActive={false} isOpen={isOpen} onHandleClick={onHandleClick}/>
            <MenuItem logo={essentialLogo} title='Essential Dapplets' isActive={false} isOpen={isOpen} onHandleClick={onHandleClick}/>
            <MenuItem logo={socialLogo} title='Social Networks' isActive={false} isOpen={isOpen} onHandleClick={onHandleClick}/>
            <MenuItem logo={financialLogo} title='Financial Dapplets' isActive={false} isOpen={isOpen} onHandleClick={onHandleClick}/>
        </nav>
    );
};

export default Navigation;