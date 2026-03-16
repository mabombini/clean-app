import { useSearchParams } from "react-router-dom";
import React, { useState } from "react";

export default function SignUpClient ()
{
    const [searchParams] = useSearchParams();
    const businessId = searchParams.get("businessid");
    const clientEmail = searchParams.get("email");

     const [formData, setFormData] = useState({
            name: "", 
            email: clientEmail,
            address: "",
            password: "",
            businessid: businessId,
            role: "client"
        })
    
        const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    
        const handleSubmit= async (e)=>{
            e.preventDefault();
    
            try
            {
                const data = await fetch("http://127.0.0.1:3000/users/addNewUser", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                })
            const response = await data.json();
    
            if (data.ok)
            {
                alert('User created')
            }
    
            }
            catch(error)
            {
                console.error("Create new user error:", error);
            }
        }

    return(
        <>
        <div className="signup-page">
            <div className="signup-box">
                <h2>Sign Up</h2>
                
                <form onSubmit={handleSubmit} className="signup-form">
                <div>
                <label htmlFor="name">Name:</label>
                <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
                </div>

                <div>
                <label htmlFor="email">Email:</label>
                <input
                id="email"
                type="text"
                name="email"
                value={formData.email}
                disabled
                readOnly
                />
                </div>
                <div>
                <label htmlFor="address">Adress:</label>
                <input
                id="address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                />
                </div>

                <div>
                <label htmlFor="password">Password:</label>
                <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
                </div>
                <div className="button">
              <button type="submit" className="signup-page-button">
                Create account
              </button>
              </div>
                </form>
            </div>
        </div>
        </>
    )
}