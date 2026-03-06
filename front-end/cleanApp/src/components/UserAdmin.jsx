import React, { useState } from "react"

export default function UserAdmin()
{
    const [clientEmail, setClientEmail] = useState("")

    return(
        <>
            <form onSubmit={submitClient}>
                <div>
                    <label htmlFor="client-email">Client email: </label>
                    <input
                    id="email"
                    type="text"
                    name="email"
                    value={clientEmail}
                    onChange={handleChange}
                    />
                </div>
            </form>
        </>
    )
}