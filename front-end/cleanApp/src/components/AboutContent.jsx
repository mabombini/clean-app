import { useEffect } from 'react'
import '../styles.css'

export default function AboutContent({ setMenuOpen }) {

    useEffect(() => {
        setMenuOpen(false)
    }, [])
    
    return (
        <main className="content">
            <h1>Dashboard</h1>
            <p>About content goes here.</p>
        </main>
    )
}