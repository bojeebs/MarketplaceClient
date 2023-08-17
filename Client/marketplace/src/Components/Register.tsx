import { AuthProvider } from "../AuthContext";
import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { RegisterUser } from "../services/Auth";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
  address: string;
};

const Register = () => {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await RegisterUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      username: formValues.username,
      password: formValues.password,
      phoneNumber: formValues.phoneNumber,
      address: formValues.address,
    });

    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      phoneNumber: "",
      address: "",
    });

    navigate("/login");
  };

  return (
    <div>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label className="firstname" htmlFor="firstname">
            First Name
          </label>
          <input
            className="register-input"
            onChange={handleChange}
            placeholder="First Name"
            name="firstName"
            type="text"
            value={formValues.firstName}
            required
          />
        </div>
        <div className="input-wrapper">
          <label className="lasttname" htmlFor="lastname">
            Last Name
          </label>
          <input
            className="register-input"
            onChange={handleChange}
            placeholder="Last Name"
            name="lastName"
            type="text"
            value={formValues.lastName}
            required
          />
        </div>
        <div className="input-wrapper">
          <label className="email" htmlFor="email">
            Email
          </label>
          <input
            className="register-input"
            onChange={handleChange}
            placeholder="Email"
            name="email"
            type="email"
            value={formValues.email}
            required
          />
        </div>
        <div className="input-wrapper">
          <label className="username" htmlFor="username">
            Username
          </label>
          <input
            className="register-input"
            onChange={handleChange}
            placeholder="Username"
            name="username"
            type="username"
            value={formValues.username}
            required
          />
        </div>
        <div className="input-wrapper">
          <label className="password" htmlFor="password">
            Password
          </label>
          <input
            className="register-input"
            onChange={handleChange}
            placeholder="Password"
            name="password"
            type="password"
            value={formValues.password}
            required
          />
        </div>
        <div className="input-wrapper">
          <label className="phonenumber" htmlFor="phonenumber">
            Phone Number
          </label>
          <input
            className="register-input"
            onChange={handleChange}
            placeholder="Phone Number"
            name="phoneNumber"
            type="text"
            value={formValues.phoneNumber}
            required
          />
        </div>
        <div className="input-wrapper">
          <label className="address" htmlFor="address">
            Address
          </label>
          <input
            className="register-input"
            onChange={handleChange}
            placeholder="Address"
            name="address"
            type="address"
            value={formValues.address}
            required
          />
        </div>
        <button
          className="create-account"
          disabled={
            !formValues.firstName ||
            !formValues.lastName ||
            !formValues.email ||
            !formValues.username ||
            !formValues.password ||
            !formValues.phoneNumber ||
            !formValues.address
          }
        >
          Create Account
        </button>
        <footer>
          <h4 className="redirect-text">
            Already have an account?
            <Link className="links" to="/login">
              Login
            </Link>
          </h4>
        </footer>
      </form>
    </div>
  );
};

export default Register;
