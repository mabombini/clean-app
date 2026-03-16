import { useEffect } from 'react'
import '../styles.css'
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function AboutContent({ setMenuOpen }) {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        setMenuOpen(false)
    }, [])
    
    return (
        <main className="content">
            <h1>Dashboard</h1>
            <p>About content goes here.</p>
            <p>Welcome, {user?.name || 'guest'}!</p>
        </main>
    )
}