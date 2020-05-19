import React, { useState } from "react";
import { axiosWithAuth } from '../auth/axiosWithAuth';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/bubbles-page');
            })
            .catch(err => console.log(err));
    }

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }   
    return (
        <>
        <h1>Welcome to the Bubble App!</h1>
        <p>Build a login page here</p>
        <form onSubmit={login}>
            <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder="Username" />
            <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" />
            <button>Log In</button>
        </form>
        </>
    );
    };

    export default Login;
