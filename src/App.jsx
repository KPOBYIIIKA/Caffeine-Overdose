import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className={styles}>
      <Header />
      <Main time={25 * 60} />
    </div>
  );
}

export default App
