import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import Searchbar from './Searchbar';

export default function Navigationbar() {
  return (
    <div className='navigationbar'>
        <Navbar bg="white" data-bs-theme="white">
        <Container>
          <Navbar.Brand href="/">UrbanMart</Navbar.Brand>
          <Searchbar/>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="product">Product</Nav.Link>
            <Nav.Link href="account">Contact</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}
