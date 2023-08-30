import React from "react"
import { Row, Container } from "react-bootstrap"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Article({ data, classes, pageContext }) {
  const article = data.directus.cms_articles[0]
  const lang = pageContext.lang
  console.log(lang)

  return (
    <Layout>
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
