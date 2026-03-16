import React, { useState } from "react"
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function UserAdmin()
{
    const { userid } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    const submitClient = async (e) => {
        e.preventDefault();
        console.log("form data: ",formData);

        const clientLink = `http://localhost:3000/users/sign-up-client?businessid=${userid}&email=${formData.email}`
        
    }
    return(
        <>
            <form onSubmit={submitClient}>
                <div>
                    <label htmlFor="client-email">Client email: </label>
                    <input
                    id="email"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    <label htmlFor="client-name">Client name: </label>
                    <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                    <button type="submit" className="signup-page-button">
                Send Invite
              </button>
                </div>
            </form>
        </>
    )
}
