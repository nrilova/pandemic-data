import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import '../../../views/landing/navbar/navbar.css';

 function Navegation() {
  return (
    <div>
        <Navbar className="nav-navbar" expand="lg">
        <Container className="container-nav">
        <Navbar.Brand className="header-brand" href="#home">COVIMAP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="basic-navbar-nav">
          <Nav className=" text-navbar navbar p-3 ">
          <NavDropdown title="Home" className="basic-nav-dropdown">
              <NavDropdown.Item className="text-navbar" href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-navbar" href="#link">Prevention</Nav.Link>
            <Nav.Link className="text-navbar" href="#link">Qurantine</Nav.Link>
            <NavDropdown title="Pages" className="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-navbar"href="#link">About</Nav.Link>
            <Nav.Link className="text-navbar"href="#link">Help</Nav.Link>
            <Button type="button" className="boton-tracker" variant="primary" href=""
            >Tracker
          </Button>{' '}
          </Nav> 
        </Navbar.Collapse>
       </Container>
    </Navbar>
    </div>
  )
}



export default Navegation;
