import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../Redux/UserReducer';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [registerFormData, setRegisterFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = e => {
        setRegisterFormData({...registerFormData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (registerFormData.password === registerFormData.confirmPassword) {
            axios.post('http://localhost:3100/user/register', { registerFormData })
                .then(res => {
                    if (res.status === 210) {// existing user
                        return alert(res.data);
                    }
                    updateUser(res.data)
                    navigate('/tenant')
                }).catch(err => {
                    alert(`Could not register, ${err}`)
                })
        }

    }

    return (
        <div>Regiester
            <form onSubmit={handleSubmit}>
                <label>First Name
                    <input
                        id="firstName"
                        type="text"
                        onChange={handleChange}
                    />
                </label>
                
                <label>Last Name
                    <input
                        id="lastName"
                        type="text"
                        onChange={handleChange}
                    />
                </label>
                
                <label>Email Address
                    <input
                        id="email"
                        type="text"
                        onChange={handleChange}
                    />
                </label>
                
                <label>Password
                    <input
                        id="password"
                        type="password"
                        onChange={handleChange}
                    />
                </label>
                
                <label>Confirm Password
                    <input
                        id="confirmPassword"
                        type="password"
                        onChange={handleChange}
                    />
                </label>
                
                <input
                    className="submitButton"
                    type="submit"
                    value="Register"
                />
            </form>
        </div>
    )
}

export default Register;
