import React from "react"
import { withPrefix } from "gatsby"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import styled from "styled-components"

function MenuPage() {
  return (
    <Menu>
      <Navbar expand="lg px-4">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{}}>
            <div className="containerLink">
              <Nav.Link href={withPrefix("/")} className="nav-item my-2">
                Home
              </Nav.Link>
            </div>
            <div className="containerLink">
              <Nav.Link href={withPrefix("/about")} className="nav-item my-2">
                About
              </Nav.Link>
            </div>
            <div className="containerLink">
              <Nav.Link href={withPrefix("/team")} className="nav-item my-2">
                Team
              </Nav.Link>
            </div>

            {/* <div className="containerLink">
              <NavDropdown
                title="Partners"
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
            </div> */}
            <div className="containerLink">
              <Nav.Link href="#link" className="nav-item my-2">
                News
              </Nav.Link>
            </div>
            <div className="containerLink">
              <Nav.Link href={withPrefix("/outputs")} className="nav-item my-2">
                Outputs
              </Nav.Link>
            </div>
            <div className="containerLink">
              <Nav.Link
                href={withPrefix("/contacts")}
                className="nav-item my-2"
              >
                Contact
              </Nav.Link>
            </div>
            <div className="containerLink">
              <Nav.Link href={withPrefix("/credits")} className="nav-item my-2">
                Credits
              </Nav.Link>
            </div>
            <div className="containerLink">
              <Nav.Link href={withPrefix("/link")} className="nav-item my-2">
                Useful Links
              </Nav.Link>
            </div>
            <div className="containerLink">
              <Nav.Link href={withPrefix("/search")} className="nav-item my-2">
                Search
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Menu>
  )
}

//style
const Menu = styled.section`
  .navbar {
    background-color: #8b5a40;
    padding: 0;
  }

  .nav-item {
    padding: 0;
    margin: 0;
    color: #fff;
    border-right: 1px solid white;
  }

  .nav-item:hover {
    padding: 0;
    margin: 0;
    color: #000;
    border-right: 1px solid white;
  }

  .containerLink:hover {
    background-color: #a99e58;
  }

  .nav-link {
    padding: 0;
    width: 100px;
    text-align: center;
  }

  #basic-nav-dropdown {
    color: #fff;
  }

  .dropdown-menu {
    background-color: #a99e58;
    color: #fff;
    padding-left: 10px;
    border-radius: 0;
    border: none !important;
    margin: 0 !important;
  }

  .dropdown-item {
    border: 0 !important;
  }
  .dropdown-item:hover {
    background-color: #fff;
    color: #000;
  }
`

export default MenuPage
