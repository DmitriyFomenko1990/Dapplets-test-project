import style from './App.module.scss';
import SideBar from "./components/side-bar/SideBar";
import Header from "./components/header/Header";
import SettingsBar from "./components/settings-bar/SettingsBar";
import Content from "./components/content/Content";

function App() {
  return (
    <div className={style.wrapper}>
        <SideBar />
        <div className={style.content}>
            <Header />
            <Content />
        </div>
        <SettingsBar />
    </div>
  );
}

export default App;
