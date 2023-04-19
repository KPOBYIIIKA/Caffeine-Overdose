import classes from "./App.module.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className={classes}>
      <Header />
      <Main />
    </div>
  );
}

export default App
