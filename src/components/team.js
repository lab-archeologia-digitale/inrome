import * as React from "react"
import { Card, Row, Col } from "react-bootstrap";

const persons = [
  {
    "name": "Barbara Borg",
    "img": "../images/borg.png",
    "role": "PI",
    "position": "Professor of Archaeology",
    "insititution": "Scuola Normale Superiore",
    "color": "#a95862"
  },
  {
    "name": "Barbara Borg",
    "img": "../images/borg.png",
    "role": "PI",
    "position": "Professor of Archaeology",
    "insititution": "Scuola Normale Superiore",
    "color": "#a99e58"
  },
  {
    "name": "Barbara Borg",
    "img": "../images/borg.png",
    "role": "PI",
    "position": "Professor of Archaeology",
    "insititution": "Scuola Normale Superiore",
    "color": "#a95862"
  },
  {
    "name": "Barbara Borg",
    "img": "../images/borg.png",
    "role": "PI",
    "position": "Professor of Archaeology",
    "insititution": "Scuola Normale Superiore"
  },
  {
    "name": "Barbara Borg",
    "img": "../images/borg.png",
    "role": "PI",
    "position": "Professor of Archaeology",
    "insititution": "Scuola Normale Superiore",
    "color": "#a95862"
  }

];

const Team = () => {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <h1>TEAM</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
          </div>
        </div>
      </section>
      <section className="py-5 text-center">
        <div className="container">
          <Row>
            { persons.map( person => {
              return <Col xs="6" lg="3" className="py-3">
                <Card>
                  <Card.Img variant="bottom" src={person.img} as="img" alt={ `${person.position}: ${person.name}` } />
                  <Card.Body style={{
                    color: '#ffffff',
                    backgroundColor: person.color ?? '#588aa9'
                  }}
                  className={person.color}>
                    <Card.Title>{ person.name }</Card.Title>
                    <Card.Text className="text-center">{ person.role }</Card.Text>
                    <Card.Text className="text-center">{ person.position } <br /> { person.insititution }</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            }) }
          </Row>
        </div>
      </section>
    </div>
  )
}

export default Team
