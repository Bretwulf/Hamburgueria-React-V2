import "./App.css";
import GlobalStyles from "./global";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login/index";
import RegisterPage from "./pages/Cadastro";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
