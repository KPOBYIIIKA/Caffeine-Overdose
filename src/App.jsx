import { useState } from "react";

import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {

  const [progress, setProgress] = useState(0);

  const handleProgressChange = (percentage) => {
    setProgress(percentage);
  };

  return (
    <div className={styles}>
      <Header progress={progress}/>
      <Main time={1 * 60} onProgressChange={handleProgressChange}/>
    </div>
  );
}

export default App
