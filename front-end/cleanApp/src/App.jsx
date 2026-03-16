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
import SignUpClient from "./components/SignUpClient";
import { AuthContext, AuthProvider } from "./components/AuthContext";
import { useContext } from "react";


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    
  <AuthProvider >
    <Router>  
        <div className = "site">
          <Header onMenuClick={() => setMenuOpen(!menuOpen)} />
          <SideMenu open={menuOpen} setMenuOpen={setMenuOpen}/>
        <main className = "site-main">
          <Routes>
              <Route
              path="/"
                element={<MainContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
              />
              <Route
              path="/about"
                element={
                <ProtectedRoute allowedRoles={['admin', 'client']}> 
                <AboutContent menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                </ProtectedRoute>}
              />
              <Route
              path="/user-admin"
                element={
                <ProtectedRoute allowedRoles={['admin']}> 
                <UserAdmin menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                </ProtectedRoute>}
              />
              <Route
          path="/login"
          element={<LoginPage email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>} />
          <Route 
          path="/dashboard"
          element={<Dashboard />} />
          <Route
          path="/notAuthorized"
          element={<NotAuthorized />} />
          <Route
          path="/sign-up"
          element={<SignUp />} />
          <Route
          path="/sign-up-client"
          element={<SignUpClient />} />
          <Route
          path="/user-admin"
          element={<ProtectedRoute allowedRoles={['admin']}> 
          <UserAdmin />
          </ProtectedRoute>} />
          </Routes>
        </main>
        </div>
    </Router>
</AuthProvider>
    </>
  );
}
