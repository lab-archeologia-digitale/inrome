import React from "react"
import { Row, Container } from "react-bootstrap"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Slide from "../components/slide"
import Box from "../components/box"

export default function Article({ data, classes, pageContext, currentLang }) {
  const article = data.directus.cms_articles[0]
  const lang = ["it", "en"].includes(pageContext.lang) ? pageContext.lang : "en"
  const path = window.location.pathname

  return (
    <Layout>
      <div className="slide"> {path === "/it/" ? <Slide /> : ""} </div>
      <div className="slide"> {path === "/en/" ? <Slide /> : ""} </div>
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
        <div> {path === "/it/" ? <Box /> : ""} </div>
        <div> {path === "/en/" ? <Box /> : ""} </div>
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
