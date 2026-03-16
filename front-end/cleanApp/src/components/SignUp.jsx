import React, { useState } from "react";
import "./SignUp.css"
import { useContext } from "react";
import { AuthContext } from "./AuthContext";


export default function SignUp ()
{
    const { user } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        password: "",
        businessid: "",
        role: "admin"
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        address: "",
        password: ""
    })
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();

       
        setErrors({ name: "", email: "", address: "", password: "" });

        let hasError = false;
        const newErrors = { name: "", email: "", address: "", password: "" };

        try{
        const response = await fetch("http://127.0.0.1:3000/users/checkEmail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: formData.email })
        });
        const emailExists = await response.json();
        
        if (emailExists.exists) {
            newErrors.email = 'Email is already in use';
            hasError = true;
        }
    } catch (error) {
        console.error("Error checking email:", error);
    }

        if (!formData.name || formData.name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters';
            hasError = true;
        }
        if (!formData.email || !formData.email.includes('@')) {
            newErrors.email = 'Please enter a valid email';
            hasError = true;
        }
        if (!formData.address || formData.address.length < 5) {
            newErrors.address = 'Address must be at least 5 characters';
            hasError = true;
        }
        if (!formData.password || formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            hasError = true;
        }

        if (hasError) {
            setErrors(newErrors);
            return;
        }
        
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
            alert('User created successfully!')

            setFormData({
                name: "",
                email: "",
                address: "",
                password: "",
                businessid: ""
            });
            setErrors({ name: "", email: "", address: "", password: "" });
        } else {
            alert('Error: ' + (response.error ? response.error.join(', ') : 'Unknown error'));
        }

        }
        catch(error)
        {
            console.error("Create new user error:", error);
            alert('Network error. Please try again.');
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
                {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div>
                <label htmlFor="email">Email:</label>
                <input
                id="email"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                <label htmlFor="address">Address:</label>
                <input
                id="address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                />
                {errors.address && <p className="error">{errors.address}</p>}
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
                {errors.password && <p className="error">{errors.password}</p>}
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