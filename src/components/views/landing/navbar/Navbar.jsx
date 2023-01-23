import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import '../../../views/landing/navbar/navbar.css';
import TrackerApp from '../../trackers/tracker-3/TrackerApp';

 function Navegation() {
  return (
    <div>
        <Navbar className="nav"expand="lg">
      <Container className="navbar ">
        <Navbar.Brand href="#home">COVIMAP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" text-white navbar p-3 ">
          <NavDropdown title="Home" id=" basic-nav-dropdown">
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
            <Nav.Link href="#link">Prevention</Nav.Link>
            <Nav.Link href="#link">Qurantine</Nav.Link>
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
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Help</Nav.Link>
            
            <Button className="boton-tracker" variant="primary" href='/TrackerApp'
            >Tracker
          </Button>{''}
          </Nav> 
        </Navbar.Collapse>
       </Container>
    </Navbar>
    </div>
  )
}



export default Navegation;
