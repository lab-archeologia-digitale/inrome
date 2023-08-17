import * as React from "react"
import { Card, Row, Col, Container } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Team = () => {
  const data = useStaticQuery(graphql`
    {
      directus {
        intro: articles(limit: 1, filter: { slug: { _eq: "team" } }) {
          id
          title
          slug
          summary
          text
        }
        team: articles(filter: { tags: { _contains: "team-members" } }) {
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
            {data.directus.team.map((person, index) => {
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
                        backgroundColor: person.color ?? "rgb(169, 158, 88)",
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
  )
}

export default Team
