import React from "react"
import { Row, Col, Container, Card } from "react-bootstrap"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Team = (currentLang, currentPath) => {
  const data = useStaticQuery(graphql`
    {
      directus {
        intro: cms_articles(
          limit: 1
          sort: "order"
          filter: { slug: { _eq: "team" } }
        ) {
          id
          title
          slug
          summary
          text
          tags
          order
        }

        sns: cms_articles(
          sort: "order"
          filter: { tags: { _contains: "sns" } }
        ) {
          id
          title
          slug
          summary
          tags
          order
          image {
            id
            imageFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        sapienza: cms_articles(
          sort: "order"
          filter: { tags: { _contains: "sapienza" } }
        ) {
          id
          title
          slug
          summary
          tags
          order
          image {
            id
            imageFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        ait: cms_articles(
          sort: "order"
          filter: { tags: { _contains: "ait" } }
        ) {
          id
          title
          slug
          summary
          tags
          order
          image {
            id
            imageFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        adb: cms_articles(
          sort: "order"
          filter: { tags: { _contains: "adb" } }
        ) {
          id
          title
          slug
          summary
          tags
          image {
            id
            imageFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Wrapper>
        <div>
          <section className="py-5">
            <Container>
              <Row>
                <h1>{data.directus.intro[0].title}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.directus.intro[0].text,
                  }}
                />
              </Row>
            </Container>
          </section>

          <section className="py-5 text-center">
            <Container>
              <Row>
                <h2>Scuola Normale Superiore</h2>
                {data.directus.sns.map((person, index) => {
                  return (
                    <Col xs="12" lg="3" className="py-3" key={index}>
                      <Card>
                        <GatsbyImage
                          image={
                            person.image.imageFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt={person.title}
                        />
                        <Card.Body
                          style={{
                            color: "#ffffff",
                            backgroundColor:
                              person.color ?? "rgb(169, 158, 88)",
                          }}
                          className={person.color}
                        >
                          <Card.Title className="border-bottom">
                            <Link
                              className="card-link"
                              to={`/en/${person.slug}`}
                            >
                              {person.title}
                            </Link>
                          </Card.Title>
                          <Card.Text
                            className="text-center"
                            style={{
                              fontSize: "0.7rem",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: person.summary.replace(
                                /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
                                "$1<br />$2",
                              ),
                            }}
                          ></Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
              <Row>
                <h2>Sapienza Università di Roma</h2>
                {data.directus.sapienza.map((person, index) => {
                  return (
                    <Col xs="12" lg="3" className="py-3" key={index}>
                      <Card>
                        <GatsbyImage
                          image={
                            person.image.imageFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt={person.title}
                        />
                        <Card.Body
                          style={{
                            color: "#ffffff",
                            backgroundColor: person.color ?? "rgb(128, 36, 51)",
                          }}
                          className={person.color}
                        >
                          <Card.Title className="border-bottom">
                            <Link
                              className="card-link"
                              to={`/en/${person.slug}`}
                            >
                              {person.title}
                            </Link>
                          </Card.Title>
                          <Card.Text
                            className="text-center"
                            style={{
                              fontSize: "0.7rem",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: person.summary.replace(
                                /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
                                "$1<br />$2",
                              ),
                            }}
                          ></Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
              <Row>
                <h2>AIT Austrian Institute of Technology</h2>
                {data.directus.ait.map((person, index) => {
                  return (
                    <Col xs="12" lg="3" className="py-3" key={index}>
                      <Card>
                        <GatsbyImage
                          image={
                            person.image.imageFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt={person.title}
                        />
                        <Card.Body
                          style={{
                            color: "#ffffff",
                            backgroundColor:
                              person.color ?? "rgb(187, 187, 187)",
                          }}
                          className={person.color}
                        >
                          <Card.Title className="border-bottom">
                            <Link
                              className="card-link"
                              to={`/en/${person.slug}`}
                            >
                              {person.title}
                            </Link>
                          </Card.Title>
                          <Card.Text
                            className="text-center"
                            style={{
                              fontSize: "0.7rem",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: person.summary.replace(
                                /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
                                "$1<br />$2",
                              ),
                            }}
                          ></Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
              <Row>
                <h2>Advisory Board</h2>
                {data.directus.adb.map((person, index) => {
                  return (
                    <Col xs="12" lg="3" className="py-3" key={index}>
                      <Card>
                        <GatsbyImage
                          image={
                            person.image.imageFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt={person.title}
                        />
                        <Card.Body
                          style={{
                            color: "#ffffff",
                            backgroundColor:
                              person.color ?? "rgb(187, 187, 187)",
                          }}
                          className={person.color}
                        >
                          <Card.Title className="border-bottom">
                            {person.title}
                          </Card.Title>
                          <Card.Text
                            className="text-center"
                            style={{
                              fontSize: "0.7rem",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: person.summary.replace(
                                /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
                                "$1<br />$2",
                              ),
                            }}
                          ></Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
            </Container>
          </section>
        </div>
      </Wrapper>
    </Layout>
  )
}
//style
const Wrapper = styled.section`
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

export default Team
