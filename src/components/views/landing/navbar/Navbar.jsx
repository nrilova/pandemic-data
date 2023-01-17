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
<<<<<<< HEAD:src/components/landing/navbar/Navbar.jsx
        <Navbar className="nav-navbar" expand="lg">
        <Container className="container-nav">
        <Navbar.Brand className="header-brand" href="#home">COVIMAP</Navbar.Brand>
=======
        <Navbar className="nav"expand="lg">
      <Container className="navbar ">
        <Navbar.Brand href="#home">COVIMAP</Navbar.Brand>
>>>>>>> c9b03b56fcc64db3cb3b5595300cb688a231e9b4:src/components/views/landing/navbar/Navbar.jsx
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" text-navbar navbar p-3 ">
          <NavDropdown title="Home" id="basic-nav-dropdown">
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
            <Nav.Link id="text-navbar" href="#link">Prevention</Nav.Link>
            <Nav.Link id="text-navbar" href="#link">Qurantine</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
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
            <Nav.Link id="text-navbar"href="#link">About</Nav.Link>
            <Nav.Link id="text-navbar"href="#link">Help</Nav.Link>
            <Button className="boton-tracker" variant="primary" 
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
