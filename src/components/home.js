import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Row, Col, Container, Card } from "react-bootstrap"

//other
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      directus {
        articles_by_id(id: "1") {
          id
          title
          text
        }
      }
    }
  `)
  return (
    <Wrapper>
      <section className="py-5">
        <Container>
          <Row>
            <h1>{data.directus.articles_by_id.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: data.directus.articles_by_id.text,
              }}
            />
          </Row>
        </Container>
      </section>
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
  )
}

//style
const Wrapper = styled.section`
  .news {
    background-color: #f3e9e3;
  }
  .card {
    border-radius: 5px;
  }
  .card-body {
    background-color: #588aa9;
  }

  .card-title a {
    color: #fff;
    text-decoration: none;
  }

  .card-title a:hover {
    color: #000;
    text-decoration: none;
  }

  .gatsby-image-wrapper:hover img {
    opacity: 0.7 !important;
    transition: all 1s ease;
  }
`

export default Home
