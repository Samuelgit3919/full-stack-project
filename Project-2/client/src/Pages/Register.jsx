// import React from 'react'

import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div className="auth">
            <h1>Register</h1>
            <form action="">
                <input required type="text" placeholder="username" />
                <input required type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button>Register</button>
            </form>
            <p>This is an error!</p>
            <span>Don't you have an account? <Link to="/register">Register</Link></span>
        </div>
    )
}

export default Register;
