import { useEffect } from 'react'
import '../styles.css'
import { useNavigate } from 'react-router-dom';

export default function AboutContent({ setMenuOpen, setUser, user }) {

    const navigate = useNavigate();

    useEffect(() => {
        setMenuOpen(false)

        const checkAuth = async () => {
            const token = localStorage.getItem('token_cleanapp');

            if (!token) 
                {
                    navigate('/login');
                    return;
                }

            try
            {
                const response = await fetch('http://localhost:3000/auth/authenticate', {
                    headers:{ Authorization: `Bearer ${token}` }
            })

            const data = await response.json();
            setUser(data.user);
            console.log("SERVER RESPONSE:", data);
            

            if (response.status === 401 || response.status === 403) {
                navigate('/login');
                return;
            }
            } 
            catch (error)
            {
                console.error("Error during authentication check:", error);
            } 
        }
        checkAuth();
    }, [])
    
    return (
        <main className="content">
            <h1>Dashboard</h1>
            <p>About content goes here.</p>
            <p>Welcome, {user?.name || 'guest'}!</p>
        </main>
    )
}