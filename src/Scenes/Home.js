import React, { useState } from 'react';

const Home = () => {
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        setLoginFormData({...loginFormData,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(loginFormData)
    }
    return (
        <div>WELCOME Home
            <form onSubmit={handleSubmit}>
                <label>email address
                    <input
                        id="email"
                        type="text"
                        onChange={handleChange}
                    />
                </label>

                <label>password
                    <input
                        id="password"
                        type="password"
                        onChange={handleChange}
                    />
                </label>

                <div>
                    <a href="/register">Sign Up</a>
                    <button>Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default Home;