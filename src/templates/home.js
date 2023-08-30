import React from "react"
import { Row, Col, Container, Card } from "react-bootstrap"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Slide from "../components/slide"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

export default function Article({ data, classes, pageContext }) {
  const article = data.directus.cms_articles[0]
  const lang = pageContext.lang
  console.log(lang)

  return (
    <Layout>
      <div className="slide">
        <Slide />
      </div>
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
                        <a href="/">Sub Projects</a>
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
                        <a href="/">News</a>
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
                        <a href="/">Outputs</a>
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
  }
`
