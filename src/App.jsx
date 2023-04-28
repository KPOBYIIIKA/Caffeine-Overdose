import { useState } from "react";
import { AuthProvider } from "./AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/main/Main";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Header from "./components/header/Header";
import Redirect from "./pages/Redirect";

function App() {
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (percentage) => {
    setProgress(percentage);
  };

  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header progress={progress} />
              <Main time={1 * 60} onProgressChange={handleProgressChange} />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/redirect" element={<Redirect label="Logged In"/>} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
