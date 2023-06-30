import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { withPrefix } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"

const FooterPage = () => {
  return (
    <Footer>
      <Container fluid>
        <Row className="px-5 pt-5">
          <Col sm={4} xs={12} className="d-flex ">
            <div>
              <a href="/">
                <StaticImage
                  src="../images/INRome_logo_def.png"
                  width={140}
                  quality={30}
                  formats={["AUTO", "WEBP"]}
                  alt="InRome"
                  className="img-fluid"
                />
              </a>
              <p className="footer-title">© Scuola Normale Superiore</p>
            </div>
          </Col>
          <Col sm={4} xs={12} className="d-flex">
            <a href="/" className="footer-link">
              SITE MAP{" "}
            </a>
            <a href={withPrefix("/privacy")} className="footer-link">
              {" "}
              PRIVACY POLICIES{" "}
            </a>
            <a href={withPrefix("/contacts")} className="footer-link">
              CONTACT{" "}
            </a>
          </Col>
          <Col sm={2} xs={6} className="d-flex justify-content-end">
            <a href="/">
              <StaticImage
                src="../images/erc-logo.svg"
                height={71}
                quality={30}
                formats={["AUTO", "WEBP"]}
                alt="erc-logo"
              />
            </a>
          </Col>
          <Col sm={2} xs={6} className="d-flex justify-content-end">
            <a href="/">
              <StaticImage
                src="../images/logo-sns@2x_0.png"
                height={71}
                quality={30}
                formats={["AUTO", "WEBP"]}
                alt="SNS"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}

//style
const Footer = styled.section`
  .container-fluid {
    background-color: #8b5a40;
    border-bottom: #3e281c solid 3rem;
    min-height: auto;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.7rem;
  }
  a:hover {
    color: #000;
    text-decoration: none;
    font-size: 0.7rem;
  }
  .footer-link {
    color: #fff;
    text-decoration: none;
    font-size: 0.7rem;
    padding: 0 2rem 0 2rem;
  }
  .footer-link:hover {
    color: #000;
    text-decoration: none;
    font-size: 0.7rem;
    padding: 0 2rem 0 2rem;
  }

  .footer-title {
    color: #fff;
    font-family: "Cinzel";
    font-size: 1.2rem;
  }
`

export default FooterPage