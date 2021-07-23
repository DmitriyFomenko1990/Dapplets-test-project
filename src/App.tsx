import style from './App.module.scss';
import SideBar from "./components/side-bar/SideBar";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={style.wrapper}>
        <SideBar />
        <Header />
    </div>
  );
}

export default App;
