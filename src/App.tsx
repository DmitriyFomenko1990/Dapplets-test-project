import style from './App.module.scss';
import SideBar from "./components/side-bar/SideBar";

function App() {
  return (
    <div className={style.wrapper}>
        <SideBar />
      <header className="header">
      </header>
    </div>
  );
}

export default App;
