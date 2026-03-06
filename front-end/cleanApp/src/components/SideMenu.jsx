import '../styles.css'
import { Link } from "react-router-dom"

export default function SideMenu({ open, user, role }) {
  

  return (
    <nav className={`side-menu ${open ? "open" : ""}`}>
      <ul>
        {!user && (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}

        {role === "client" && (
          <>
            <li><Link to="/">Home client</Link></li>
            <li><Link to="/dashboard">Dashboard client</Link></li>
            <li><Link to="/settings">Settings client</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </>
        )}

        {user && user.role === "admin" && (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin Panel</Link></li>
            <li><Link to="/users">User Management</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </>
        )}

      </ul>
    </nav>
  );
}
