import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';

const UserProfile = () => {
    const { user, isLoading, error } = useAuth();

    if (isLoading) {
        return (
            <Container className="text-center mt-5">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-5">
                <Alert variant="danger">
                    Error: {error.message}
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            {user ? (
                <Card>
                    <Card.Header as="h1" className="text-center">User Profile</Card.Header>
                    <Card.Body>
                        <Row style={{fontSize:"18px", height:"60vh"}}>
                            <Col md={6}>
                                <Card.Text><strong>Username:</strong> {user.username}</Card.Text>
                                <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
                                <Card.Text><strong>Address:</strong> {user.address}</Card.Text>
                                <Card.Text><strong>Country:</strong> {user.country}</Card.Text>
                                <Card.Text><strong>Phone Number:</strong> {user.phoneNumber}</Card.Text>
                            </Col>
                            <Col md={6}>
                                <Card.Text><strong>Postal Code:</strong> {user.postalCode || 'Not provided'}</Card.Text>
                                <Card.Text><strong>Role:</strong> {user.role}</Card.Text>
                                <Card.Text><strong>Cart Total Amount:</strong> {user.cart?.totalAmount || '0'}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ) : (
                <Alert variant="warning" className="text-center">
                    No user information available
                </Alert>
            )}
        </Container>
    );
};

export default UserProfile;
