import React from 'react'
import { useState } from 'react'

export default function Signup(props) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const handleSignup = (e) => {
        e.preventDefault()
        alert(`Thank you, ${firstName}! You have successfully signed up with your email: ${email}`)
        setFirstName("")
        setLastName("")
        setEmail("")
    }

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img
                        src="https://bigmemes.funnyjunk.com/pictures/Albert_e4f2e8_6546489.jpg"
                        alt="Avatar"
                        style={{ borderRadius: ".1in" }}
                    />
                </div>
                <form className="flip-card-back" onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstname"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <p> </p>
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                    <p> </p>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <p> </p>
                    <input className="button" type="submit" value="Get Quotes" />
                </form>
            </div>
        </div>
    )

}