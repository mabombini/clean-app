import { useState } from "react";
import SideMenu from "./components/SideMenu";
import "./styles.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import AboutContent from "./components/AboutContent";
import LoginPage from "./components/LoginPage";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    
      
    <Router>
      <Routes>
        <Route
        path="/login"
        element={<LoginPage />} />
      </Routes>
      
        <div className = "site">
          <Header onMenuClick={() => setMenuOpen(!menuOpen)} />
          <SideMenu open={menuOpen} />
        <main className = "site-main">
          <Routes>
              <Route
              path="/"
                element={<MainContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
              />
              <Route
              path="/about"
                element={<AboutContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
              />
          </Routes>
        </main>
        </div>
    </Router>
    </>
  );
}
