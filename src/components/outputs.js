import * as React from "react"
import { Row, Container } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

const Outputs = () => {
  const data = useStaticQuery(graphql`
    {
      directus {
        articles_by_id(id: "4") {
          id
          title
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
            <h1>{data.directus.articles_by_id.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: data.directus.articles_by_id.text,
              }}
            />
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Outputs
