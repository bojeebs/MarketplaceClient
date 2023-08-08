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
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
  };

  return (
  <>
  <form onSubmit={handleSubmit}>
    <label className='user=password' htmlFor="username">Username</label>
    <input
      className='login-input'
      onChange={handleChange}
      type="password"
      name="password"
      placeholder='password'
      value={formValues.password}
      required
      />
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
