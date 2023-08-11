import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { LoginUser } from "../services/Auth";

type FormValues = {
  username: string;
  password: string;
};

const Login = () => {
  let navigate = useNavigate();

  const { authenticated, setAuthenticated, user, setUser } = useAuth();
  const [info, setInfo] = useState({});
  const [formValues, setFormValues] = useState<FormValues>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log("Form Values:", formValues);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formValues);
    try {
    const payload = await LoginUser(formValues);
    console.log(payload);
    setInfo({
      ...info,
      id: payload.id,
      username: payload.username,
      password: payload.password,
      createdAt: payload.createdAt,
      updatedAt: payload.updatedAt,
    });
    setFormValues({ username: "", password: "" });

    setUser(payload);
    setAuthenticated(true);
    
    navigate('/')
  } catch (error) {
    console.error("Login Error:", error);
  }
}

  return (
  <>
  <form onSubmit={handleSubmit}>
    <label className='username' htmlFor="username">Username</label>
    <>
    <input
      className='login-input'
      onChange={handleChange}
      type="text"
      name="username"
      placeholder='username'
      value={formValues.username}
      required
      />
      </>
      <div>
      <label className='password' htmlFor="password">Password</label>
      <input 
      className='login-input'
      onChange={handleChange}
      type="password"
      name="password"
      placeholder='password'
      value={formValues.password}
      required
      >
      </input>
      </div>
      <div>
      <button className='signin-button' disabled={formValues.username === '' || formValues.password === ''}>
        Log In
      </button>

      </div>

  </form>
  </>
  )
};

export default Login;
