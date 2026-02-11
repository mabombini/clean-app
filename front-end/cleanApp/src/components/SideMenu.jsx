import '../styles.css'
import { Link, useNavigate } from "react-router-dom";

export default function SideMenu({ open }) {
  return (
    <nav className={`side-menu ${open ? "open" : ""}`}>
      <ul>
        <li>Home</li>
        <Link to="/about">About</Link>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
}
