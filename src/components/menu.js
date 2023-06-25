import React from "react"
import { withPrefix } from "gatsby"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container"

function Menu() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{}}>
            <div className="containerLink">
              <Nav.Link href={withPrefix('/')} className="nav-item my-2">
                Home
              </Nav.Link>
            </div>
            <div className="containerLink">
              <Nav.Link href="#link" className="nav-item my-2">
                About
              </Nav.Link>
            </div>
            <div className="containerLink">
              <Nav.Link href={ withPrefix('/team') } className="nav-item my-2">
                Team
              </Nav.Link>
            </div>
            <div className="containerLink">
              <NavDropdown
                title="Parteners"
                id="basic-nav-dropdown"
                className="nav-item my-2"
              >
                <NavDropdown.Item href="#action/3.1" className="nav-item my-2">
                  Sapienza
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="nav-item my-2">
                  AIT
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="nav-item my-2">
                  SITAR
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="containerLink">
              <Nav.Link href="#link" className="nav-item my-2">
                News
              </Nav.Link>
            </div>
            <div className="containerLink">
              <Nav.Link href="#link" className="nav-item my-2">
                Outputs
              </Nav.Link>
            </div>
            <div className="containerLink">
              <Nav.Link href="#link" className="nav-item my-2">
                Contact
              </Nav.Link>
            </div>
            <div className="containerLink">
              <Nav.Link href="#link" className="nav-item my-2">
                Credits
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
