import './LoginPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from "react-router-dom";
   
export default function LoginPage({email, setEmail, password, setPassword })
{

const navigate = useNavigate();

const { setUser, setRole } = useContext(AuthContext)

if (localStorage.getItem('token_cleanapp')) {
    return <Navigate to="/about" replace />;
}


const handleSubmit = async (e) => {
    e.preventDefault();

    try
    {
       const data = await fetch('http://localhost:3000/auth/login', {
        method: "POST", 
        headers: {
        "Content-Type": "application/json"
       },
       body: JSON.stringify({
                email: email,
                password: password
                })    
        }) 
        
        const response = await data.json();

        if (!response.token) {
            alert("Login failed: " + (response.message || "Unknown error"));
            return;
        }

        localStorage.setItem('token_cleanapp', response.token);

        const loggedUser = response.user;

        setUser(loggedUser);
        setRole(loggedUser.role);

        navigate('/about')
        
    } catch (error){
        console.error("Error during login:", error);
    }          
}

    return (
        <>
            <form className="login-box" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" required onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" required onChange={(e) => setPassword(e.target.value)}/>

            <button type="submit">Sign In</button>
            </form>
        </>
    )
}