import style from './App.module.scss';
import SideBar from "./components/side-bar/SideBar";
import Header from "./components/header/Header";
import SettingsBar from "./components/settings-bar/SettingsBar";
import Content from "./components/content/Content";
import React, {useState} from "react";

function App() {
    const [isOpenSideBar, setIsOpenSideBar] = useState(true)
    const onHandleClick = (event: React.SyntheticEvent) =>{
        return setIsOpenSideBar(!isOpenSideBar);
    }
  return (
    <div className={style.wrapper}>
        <SideBar isOpenSideBar={isOpenSideBar} onHandleClick={onHandleClick} />
        <div className={style.content}>
            <Header />
            <Content isOpenSideBar={isOpenSideBar}/>
        </div>
        <SettingsBar />
    </div>
  );
}

export default App;
