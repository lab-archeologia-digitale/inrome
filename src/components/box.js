import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Row, Col, Container, Card } from "react-bootstrap"
import { useStaticQuery, graphql, Link, withPrefix } from "gatsby"

function Box({ currentLang }) {
  const data = useStaticQuery(graphql`
    {
      directus {
        menu: cms_articles(sort: "order") {
          title
          title_it
          slug
        }
      }
    }
  `)
  return (
    <section className="py-5 text-center news">
      <Wrapper>
        <Container>
          <Row>
            <Col sm={4} xs={12}>
              <Card>
                <StaticImage
                  src="../images/progetti.png"
                  formats={["AUTO", "WEBP"]}
                  alt="progetti"
                  className="card-img-top"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {" "}
                    <Link
                      href={withPrefix(
                        `${currentLang}/${
                          data.directus.menu.slug === "collaborazioni"
                            ? ""
                            : data.directus.menu.slug
                        }`,
                      )}
                      className="nav-item my-2"
                    >
                      {currentLang === "it"
                        ? data.directus.menu.title_it
                        : data.directus.menu.title}
                    </Link>
                  </h5>
                </div>
              </Card>
            </Col>
            <Col sm={4} xs={12}>
              <Card>
                <StaticImage
                  src="../images/news.png"
                  formats={["AUTO", "WEBP"]}
                  alt="news"
                  className="card-img-top"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="/news">News</a>
                  </h5>
                </div>
              </Card>
            </Col>
            <Col sm={4} xs={12}>
              <Card>
                <StaticImage
                  src="../images/output.png"
                  formats={["AUTO", "WEBP"]}
                  alt="output"
                  className="card-img-top"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="/outputs">Outputs</a>
                  </h5>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </section>
  )
}

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
  a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: rgb(169, 158, 88);
      text-decoration: none;
    }
  }
`

export default Box
