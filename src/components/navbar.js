import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"
import { Col, Container, Row } from "react-bootstrap"

const Navbar = ({ siteTitle }) => {
  return (
    <Header>
      <Container fluid>
        <Row className="px-5 pt-5">
          <Col sm={8} xs={12} className="d-flex justify-content-start p-0">
            <div>
              <a href="/">
                <StaticImage
                  src="../images/INRome_logo_def.png"
                  width={250}
                  formats={["AUTO", "WEBP"]}
                  alt={siteTitle}
                />
              </a>
              <p className="header-title">{siteTitle}</p>
            </div>
          </Col>
          <Col sm={2} xs={6} className="d-flex justify-content-end logoMobile">
            <div>
              <a href="/">
                <StaticImage
                  src="../images/erc-logo.svg"
                  height={71}
                  quality={30}
                  formats={["AUTO", "WEBP"]}
                  alt="erc"
                />
              </a>
            </div>
          </Col>
          <Col sm={2} xs={6} className="d-flex justify-content-end logoMobile">
            <div>
              <a href="/">
                <StaticImage
                  src="../images/logo-sns@2x_0.png"
                  height={71}
                  quality={30}
                  formats={["AUTO", "WEBP"]}
                  alt="SNS"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Row className="lang px-1 pt-1">
        <Col sm={11} xs={12} className="d-flex justify-content-start p-0">
          <div></div>
        </Col>
        <Col sm={1} xs={12} className="d-flex justify-content-end lang-int">
          <div className="lang-int">
            <span>
              <a href="/">IT</a> - <a href="/">EN</a>
            </span>
          </div>
        </Col>
      </Row>
    </Header>
  )
}

//style
const Header = styled.section`
  .container-fluid {
    background-color: #8b5a40;
    min-height: auto;
  }
  .header-title {
    color: #fff;
    font-family: "Roboto";
    font-size: 1.2rem;
  }

  .lang {
    color: #fff;
    font-size: 0.9rem;
    background-color: #3e281c;
    width: 100%;
    margin: 0;
    min-height: auto;
    text-align: center;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    color: rgb(169, 158, 88);
    text-decoration: none;
  }
`

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
