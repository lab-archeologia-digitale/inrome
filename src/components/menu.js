import React from "react"
import { withPrefix } from "gatsby"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

function MainMenu({currentLang}) {

  const data = useStaticQuery(graphql`
    {
      directus {
        menu: cms_articles(
          sort: "id"
          filter: { tags: { _contains: "home-item" } }
        ) {
          title
          title_it
          slug
        }
      }
    }
  `)
  return (
    <Menu>
      <Navbar expand="lg px-4">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{}}>
            {data.directus.menu.map((menuItem, index) => {
              return (
                <div className="containerLink" key={index}>
                  <Nav.Link
                    href={withPrefix(`${currentLang}/${menuItem.slug}`)}
                    className="nav-item my-2"
                  >
                    { (currentLang === 'it') ? menuItem.title_it : menuItem.title_it}
                  </Nav.Link>
                </div>
              )
            })}
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
    width: 110px;
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

export default MainMenu;
