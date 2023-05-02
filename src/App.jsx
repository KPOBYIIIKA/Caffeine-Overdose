import { useState } from "react";
import { AuthProvider } from "./AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Main from "./components/main/Main";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Header from "./components/header/Header";
import Redirect from "./pages/Redirect";
import Profile from "./pages/profile/Profile";

function App() {
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (percentage) => {
    setProgress(percentage);
  };

  return (
    <Router>
      <AuthProvider>
        <AppRoutes progress={progress} onProgressChange={handleProgressChange} />
      </AuthProvider>
    </Router>
  );
}

function AppRoutes({ progress, onProgressChange }) {
  const location = useLocation();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header progress={progress} />
            <Main time={1 * 60} onProgressChange={onProgressChange} />
          </>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/redirect"
        element={
          <Redirect action={location.state ? location.state.action : ""} />
        }
      />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;