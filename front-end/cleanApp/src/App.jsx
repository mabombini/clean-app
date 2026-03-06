import { useState } from "react";
import SideMenu from "./components/SideMenu";
import "./styles.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import AboutContent from "./components/AboutContent";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute"
import NotAuthorized from "./components/NotAuthorized"
import SignUp from "./components/SignUp"
import UserAdmin from "./components/UserAdmin";


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  return (
    <>
    
      
    <Router>

        
        <div className = "site">
          <Header onMenuClick={() => setMenuOpen(!menuOpen)} />
          <SideMenu open={menuOpen} user={user} setUser={setUser} setMenuOpen={setMenuOpen} role={role} setRole={setRole}/>
        <main className = "site-main">
          <Routes>
              <Route
              path="/"
                element={<MainContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
              />
              <Route
              path="/about"
                element={
                <ProtectedRoute allowedRoles={['admin', 'client']}
                role={role}> 
                <AboutContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} setUser={setUser} user={user}/>
                </ProtectedRoute>}
              />
              <Route
              path="/user-admin"
                element={
                <ProtectedRoute allowedRoles={['admin']}
                role={role}> 
                <UserAdmin menuOpen={menuOpen} setMenuOpen={setMenuOpen} setUser={setUser} user={user}/>
                </ProtectedRoute>}
              />
              <Route
          path="/login"
          element={<LoginPage email={email} setEmail={setEmail} password={password} setPassword={setPassword} user={user} setUser={setUser} setRole={setRole}/>} />
          <Route 
          path="/dashboard"
          element={<Dashboard />} />
          <Route
          path="/notAuthorized"
          element={<NotAuthorized />} />
          <Route
          path="/sign-up"
          element={<SignUp />} />
          </Routes>
        </main>
        </div>
    </Router>
    </>
  );
}
