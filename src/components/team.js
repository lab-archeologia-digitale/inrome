import * as React from "react"
import { Card, Row, Col, Container } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

const persons = [
  {
    name: "Barbara Borg",
    img: "../images/borg.png",
    role: "PI",
    position: "Professor of Archaeology",
    insititution: "Scuola Normale Superiore",
    color: "#a95862",
  },
  {
    name: "Barbara Borg",
    img: "../images/borg.png",
    role: "PI",
    position: "Professor of Archaeology",
    insititution: "Scuola Normale Superiore",
    color: "#a99e58",
  },
  {
    name: "Barbara Borg",
    img: "../images/borg.png",
    role: "PI",
    position: "Professor of Archaeology",
    insititution: "Scuola Normale Superiore",
    color: "#a95862",
  },
  {
    name: "Barbara Borg",
    img: "../images/borg.png",
    role: "PI",
    position: "Professor of Archaeology",
    insititution: "Scuola Normale Superiore",
  },
  {
    name: "Barbara Borg",
    img: "../images/borg.png",
    role: "PI",
    position: "Professor of Archaeology",
    insititution: "Scuola Normale Superiore",
    color: "#a95862",
  },
]

const Team = () => {
  const data = useStaticQuery(graphql`
    {
      directus {
        articles(filter: {slug: {_eq: "team"}}) {
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
    <div>
      <section className="py-5">
        <Container>
          <Row>
            <h1>{data.directus.articles[0].title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: data.directus.articles[0].text,
              }}
            />
          </Row>
        </Container>
      </section>
      <section className="py-5 text-center">
        <Container>
          <Row>
            {persons.map(person => {
              return (
                <Col xs="6" lg="3" className="py-3">
                  <Card>
                    <Card.Img
                      variant="bottom"
                      src={person.img}
                      as="img"
                      alt={`${person.position}: ${person.name}`}
                    />
                    <Card.Body
                      style={{
                        color: "#ffffff",
                        backgroundColor: person.color ?? "#588aa9",
                      }}
                      className={person.color}
                    >
                      <Card.Title>{person.name}</Card.Title>
                      <Card.Text className="text-center">
                        {person.role}
                      </Card.Text>
                      <Card.Text className="text-center">
                        {person.position} <br /> {person.insititution}
                      </Card.Text>
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
