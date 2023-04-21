import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import LoginPage from "./pages/LoginPage";

function App() {
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (percentage) => {
    setProgress(percentage);
  };

  return (
    <Router>
        <Header progress={progress} />
        <Routes>
          <Route path="/" element={<Main time={1 * 60} onProgressChange={handleProgressChange} />} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
    </Router>
  );
}

export default App;
