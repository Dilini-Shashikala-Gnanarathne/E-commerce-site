import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const SignupForm=()=> {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
    country: '',
    phoneNumber: '',
    postalCode: '',
    role: 'viewer',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.role !== 'admin' && formData.role !== 'viewer') {
      setError('Role must be either admin or viewer');
      return;
    }
    addUser(formData);
  };

  const addUser = (data) => {
    axios.post('http://localhost:3001/api/createUser', data)
      .then(() => {
        resetForm();
        setError(null);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setError(error.response.data.error);
        } else {
          setError('An unexpected error occurred');
        }
      });
  };

  const resetForm = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      address: '',
      country: '',
      phoneNumber: '',
      postalCode: '',
      role: 'viewer',
    });
  };

  return (
    <div className="auth-form-container-sign">
      <Form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={formData.country}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </Form.Group>
        
        {error && <p className="error-text">{error}</p>}
        
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <p>
          <br/> Already have an account? <Link to="/login"><span className='login-span'>Login</span></Link>
        </p>
      </Form>
    </div>
  );
}

export default SignupForm;
