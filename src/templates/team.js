import React from "react"
import { Row, Col, Container, Card } from "react-bootstrap"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Team = () => {
  const data = useStaticQuery(graphql`
    {
      directus {
        intro: cms_articles(limit: 1, filter: { slug: { _eq: "team" } }) {
          id
          title
          slug
          summary
          text
          tags
        }
        team: cms_articles(filter: { tags: { _contains: "team-members" } }) {
          id
          title
          slug
          summary
          tags
        }
        sns: cms_articles(filter: { tags: { _contains: "sns" } }) {
          id
          title
          slug
          summary
          tags
        }
        sapienza: cms_articles(filter: { tags: { _contains: "sapienza" } }) {
          id
          title
          slug
          summary
          tags
        }
        ait: cms_articles(filter: { tags: { _contains: "ait" } }) {
          id
          title
          slug
          summary
          tags
        }
        adb: cms_articles(filter: { tags: { _contains: "adb" } }) {
          id
          title
          slug
          summary
          tags
        }
      }
    }
  `)
  return (
    <Layout>
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
                  <Col xs="6" lg="3" className="py-3" key={index}>
                    <Card>
                      <GatsbyImage
                        image={
                          person.image.imageFile.childImageSharp.gatsbyImageData
                        }
                        alt={person.title}
                      />
                      <Card.Body
                        style={{
                          color: "#ffffff",
                          backgroundColor: person.color ?? "rgb(0, 90, 116)",
                        }}
                        className={person.color}
                      >
                        <Card.Title className="border-bottom">
                          {person.title}
                        </Card.Title>
                        <Card.Text
                          className="text-center"
                          dangerouslySetInnerHTML={{
                            __html: person.summary.replace(
                              /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
                              "$1<br />$2"
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
              {data.directus.sapienza.reverse().map((person, index) => {
                return (
                  <Col xs="6" lg="3" className="py-3" key={index}>
                    <Card>
                      {/* <GatsbyImage
                        image={
                          person.image.imageFile.childImageSharp.gatsbyImageData
                        }
                        alt={person.title}
                      /> */}
                      <Card.Body
                        style={{
                          color: "#ffffff",
                          backgroundColor: person.color ?? "rgb(128, 36, 51)",
                        }}
                        className={person.color}
                      >
                        <Card.Title className="border-bottom">
                          {person.title}
                        </Card.Title>
                        <Card.Text
                          className="text-center"
                          dangerouslySetInnerHTML={{
                            __html: person.summary.replace(
                              /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
                              "$1<br />$2"
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
                  <Col xs="6" lg="3" className="py-3" key={index}>
                    <Card>
                      {/* <GatsbyImage
                        image={
                          person.image.imageFile.childImageSharp.gatsbyImageData
                        }
                        alt={person.title}
                      /> */}
                      <Card.Body
                        style={{
                          color: "#ffffff",
                          backgroundColor: person.color ?? "rgb(187, 187, 187)",
                        }}
                        className={person.color}
                      >
                        <Card.Title className="border-bottom">
                          {person.title}
                        </Card.Title>
                        <Card.Text
                          className="text-center"
                          dangerouslySetInnerHTML={{
                            __html: person.summary.replace(
                              /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
                              "$1<br />$2"
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
              <h2>Advisory Board </h2>
              {data.directus.adb.map((person, index) => {
                return (
                  <Col xs="6" lg="3" className="py-3" key={index}>
                    <Card>
                      {/* <GatsbyImage
                        image={
                          person.image.imageFile.childImageSharp.gatsbyImageData
                        }
                        alt={person.title}
                      /> */}
                      <Card.Body
                        style={{
                          color: "#ffffff",
                          backgroundColor: person.color ?? "rgb(187, 187, 187)",
                        }}
                        className={person.color}
                      >
                        <Card.Title className="border-bottom">
                          {person.title}
                        </Card.Title>
                        <Card.Text
                          className="text-center"
                          dangerouslySetInnerHTML={{
                            __html: person.summary.replace(
                              /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
                              "$1<br />$2"
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
    </Layout>
  )
}

export default Team
