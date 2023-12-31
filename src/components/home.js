import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { Row, Col, Container, Card } from "react-bootstrap"

//other
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      directus {
        cms_articles(limit: 1, filter: { slug: { _eq: "home" } }) {
          id
          title
          slug
          summary
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
            <h1>{data.directus.cms_articles[0].title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: data.directus.cms_articles[0].text,
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
                    <Link to="en/collaborazioni">Collaborations</Link>
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
                    <Link href="en/news">News</Link>
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
                    <Link to="en/outputs">Outputs</Link>
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

export default Home
