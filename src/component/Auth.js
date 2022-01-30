import React, { useState } from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";

import chatImage from './assets/image/chat.jfif'

const initialState = {
  fullName: '',
  userName: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  avatarUrl: ''
};

const cookies = new Cookies();

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignUp, setSignUp] = useState(false);
  const [userName, setUserName] = useState('');

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]:event.target.value});
  }

  const changeMode = () => {
    setSignUp((prevIsSignUp) => !prevIsSignUp);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { fullName, userName, password, phoneNumber, avatarUrl } = form;
    const URL = 'http://localhost:5000/auth';
    const { data: {token, id, hashedPassword} } = await axios.post(`${URL}/${isSignUp ? 'signup' : 'login'}`, {
      fullName, userName, password, phoneNumber
    });

    cookies.set('token', token);
    cookies.set('id', id);
    cookies.set('fullName', fullName);

    if(isSignUp) {
      cookies.set('hashedPassword', hashedPassword);
      cookies.set('phoneNumber', phoneNumber);
      cookies.set('avatarUrl', avatarUrl);
    }
    window.location.reload();
  }

  return (
      <div className="auth__form-container">
        <div className="auth__form-container_fields">
          <div className="auth__form-container_fields-content">
            <p>{isSignUp ? "Sign Up" : "Sign In"}</p>
            <form onSubmit={handleSubmit}>
              {isSignUp && (
                  <div className="auth__form-container_fields-content_input">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required/>
                  </div>
              )}
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="username">User Name</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    required/>
              </div>
              {isSignUp && (
                  <div className="auth__form-container_fields-content_input">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        required/>
                    <label htmlFor="avatarUrl">avatar URL</label>
                    <input
                        type="text"
                        name="avatarUrl"
                        placeholder="avatar Url"
                        onChange={handleChange}
                        required/>
                  </div>
              )}
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                    required/>
              </div>
              {isSignUp && (
                  <div className="auth__form-container_fields-content_input">
                    <label htmlFor="confirmPassword">Confirm your Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="confirm your password"
                        onChange={handleChange}
                        required/>
                  </div>
              )}
              <div className="auth__form-container_fields-content_button">
                <button>{isSignUp ? "Sign Un" : "Sign In"}</button>
              </div>
            </form>
            <div className="auth__form-container_fields-account">
              <p>
                {isSignUp ? "Already have an account?" : "Don't have any account?"}
                <span onClick={changeMode}>
                  {isSignUp ? "Sign In" : "Sign Up"}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="auth__form-container_image">
          <img src={chatImage}/>
        </div>
      </div>
  );
};

export default Auth;