import style from './App.module.scss';
import SideBar from "./components/side-bar/SideBar";
import Header from "./components/header/Header";
import SettingsBar from "./components/settings-bar/SettingsBar";

function App() {
  return (
    <div className={style.wrapper}>
        <SideBar />
        <Header />
        <SettingsBar />
    </div>
  );
}

export default App;
