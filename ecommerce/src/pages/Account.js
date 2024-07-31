import React, { useState } from 'react';
import Axios from 'axios';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Account = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    message: '',
    role: '', 
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
    Axios.post('http://localhost:3001/api/message', data)
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
      phoneNumber: '',
      message: '',
      role: '', 
    });
  };

  return (
    <Container className="py-5">
      <Row>
        <Col lg={6}>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
              alt="Contact"
            />
          </Card>
        </Col>
        <Col lg={6}>
          <div className="contact-box ml-3">
            <h1 className="font-weight-light mt-2">Quick Contact</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form className="mt-4" onSubmit={handleSubmit}>
              <Form.Group controlId="username" className="mt-2">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="email" className="mt-2">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password" className="mt-2">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="phoneNumber" className="mt-2">
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="message" className="mt-2">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="role" className="mt-2">
                <Form.Control
                  type="text"
                  placeholder="Role (admin/viewer)"
                  value={formData.role}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-2">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
        <Col lg={12}>
          <Card className="mt-4 border-0 mb-4">
            <Row>
              <Col lg={4} md={4}>
                <Card.Body className="d-flex align-items-center c-detail pl-0">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt="Address" />
                  </div>
                  <div>
                    <h6 className="font-weight-medium">Address</h6>
                    <p>601 Sherwood Ave.<br />San Bernandino</p>
                  </div>
                </Card.Body>
              </Col>
              <Col lg={4} md={4}>
                <Card.Body className="d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" alt="Phone" />
                  </div>
                  <div>
                    <h6 className="font-weight-medium">Phone</h6>
                    <p>251 546 9442<br />630 446 8851</p>
                  </div>
                </Card.Body>
              </Col>
              <Col lg={4} md={4}>
                <Card.Body className="d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt="Email" />
                  </div>
                  <div>
                    <h6 className="font-weight-medium">Email</h6>
                    <p>info@wrappixel.com<br />123@wrappixel.com</p>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
