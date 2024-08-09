import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Login.css';

const Login=()=> {
  const [formData, setFormData] = useState({
    password: '',
    email: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loging(formData);
  };

  const loging = (data) => {
    axios.post('http://localhost:3001/api/login', data)
      .then((response) => {
        const { token, email } = response.data;
        console.log(`Login: ${token}`);

        if (token) {
          localStorage.setItem('authToken', token);
          setError(null);
          navigate('/home');
        } else {
          setError('Login failed: no token received');
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setError(error.response.data.error);
        } else {
          setError('An unexpected error occurred');
        }
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          {error && <p className="error-text">{error}</p>}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}


export default Login;