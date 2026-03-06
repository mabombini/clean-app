import './LoginPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

   
export default function LoginPage({email, setEmail, password, setPassword, setUser, setRole})
{

const navigate = useNavigate();

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
        localStorage.setItem('token_cleanapp', response.token); 
        console.log("LOGIN RESPONSE:", response.userRole);
        setRole(response.userRole);


        navigate('/about')

    } catch (error){
        console.error("Error during login:", error);
    }
          
}

    return (
        <>
            <form className="login-box" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <label for="email">Email</label>
            <input type="email" id="email" required onChange={(e) => setEmail(e.target.value)}/>

            <label for="password">Password</label>
            <input type="password" id="password" required onChange={(e) => setPassword(e.target.value)}/>

            <button type="submit">Sign In</button>
            </form>
        </>
    )
}