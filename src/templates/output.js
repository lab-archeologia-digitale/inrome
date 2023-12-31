import React from "react"
import { Row, Col, Container, Card } from "react-bootstrap"
import { graphql, Link, withPrefix } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { useLocation } from "@reach/router"

export default function Article({ data, classes, pageContext }) {
  const article = data.directus.cms_articles[0]
  const lang = ["it", "en"].includes(pageContext.lang) ? pageContext.lang : "en"
  const location = useLocation()
  const lang2 = location.pathname.includes("/it/") ? "it" : "en"

  return (
    <Layout>
      <div>
        <section className="py-5">
          <Container>
            <Row>
              <h1>{lang === "it" ? article.title_it : article.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: lang === "it" ? article.text_it : article.text,
                }}
              />
            </Row>
          </Container>
        </section>
        <Wrapper>
          <section className="py-5 text-center news">
            <Container>
              <Row className="mb-5">
                <Col sm={6} xs={12}>
                  <Card>
                    <StaticImage
                      src="../images/biblio.png"
                      formats={["AUTO", "WEBP"]}
                      alt="pubblicazioni"
                      className="card-img-top"
                      height={300}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link href={withPrefix(`${lang2}/publications`)}>
                          {lang === "it" ? "Pubblicazioni" : "Publications"}
                        </Link>
                      </h5>
                    </div>
                  </Card>
                </Col>
                <Col sm={6} xs={12}>
                  <Card>
                    <StaticImage
                      src="../images/software.png"
                      formats={["AUTO", "WEBP"]}
                      alt="software"
                      className="card-img-top"
                      height={300}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={withPrefix(`${lang2}/software`)}>
                          Software
                        </Link>
                      </h5>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col sm={6} xs={12}>
                  <Card>
                    <StaticImage
                      src="../images/biblio.png"
                      formats={["AUTO", "WEBP"]}
                      alt="output"
                      className="card-img-top"
                      height={300}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link href={withPrefix(`${lang2}/pre-publication`)}>
                          {lang === "it"
                            ? "Pubblicazioni Pre-progetto"
                            : "Pre-project publications of relevance"}
                        </Link>
                      </h5>
                    </div>
                  </Card>
                </Col>
                <Col sm={6} xs={12}>
                  <Card>
                    <StaticImage
                      src="../images/biblio2.png"
                      formats={["AUTO", "WEBP"]}
                      alt="bibliografia"
                      className="card-img-top"
                      height={300}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={withPrefix(`${lang2}/bibliografia`)}>
                          {lang === "it"
                            ? "Bibliografia"
                            : "Project Bibliography "}
                        </Link>
                      </h5>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </Wrapper>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    directus {
      cms_articles(filter: { slug: { _eq: $slug } }) {
        title
        title_it
        summary
        summary_it
        text
        text_it
      }
    }
  }
`
//style
const Wrapper = styled.section`
  .news {
    background-color: #f3e9e3;
  }
  .card {
    border-radius: 1rem;

    &:hover img {
      opacity: 0.7 !important;
      transition: all 1s ease;
    }

    .card-title a {
      color: #fff;
      text-decoration: none;

      &:hover {
        color: #000;
        text-decoration: none;
      }
    }

    .card-body {
      background-color: rgb(169, 158, 88);
    }

    .card-link a {
      color: #ffffff;
      text-decoration: none
      
      &:hover {
        color: #000;
        text-decoration: none;
      }
    }
  }
`
