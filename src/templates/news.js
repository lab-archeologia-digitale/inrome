import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const NewsPage = () => {
  const news = useStaticQuery(graphql`
    {
      directus {
        cms_articles(filter: { tags: { _contains: "news" } }) {
          id
          slug
          title
          title_it
          summary
          summary_it
          text
          text_it
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
                <h2>News</h2>
              </Row>
              {news.directus.cms_articles.map((item, index) => {
                return (
                  <Row>
                    <Col xs="12" lg="12" md="12" className="py-3" key={index}>
                      <Col className="border-bottom">
                        <Link className="news-link" to={`/en/${item.slug}`}>
                          {item.title}
                        </Link>
                      </Col>
                      <Col
                        sm="2"
                        style={{
                          float: "left",
                        }}
                      >
                        <GatsbyImage
                          image={
                            item.image.imageFile.childImageSharp.gatsbyImageData
                          }
                          alt={item.title}
                        />
                      </Col>
                      <Col
                        className="news-text"
                        sm="10"
                        dangerouslySetInnerHTML={{
                          __html: item.summary.replace(
                            /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
                            "$1<br />$2",
                          ),
                        }}
                      ></Col>
                    </Col>
                  </Row>
                )
              })}
            </Container>
          </section>
        </div>
      </Wrapper>
    </Layout>
  )
}
//style
const Wrapper = styled.section`

.news-text {
        float: right;
        font-dize: 1rem;
        text-slign: justify;
        padding-top: 3rem;
}

.news-link {
    text-transform: uppercase;
  }
    .news-link a {
      color: #ffffff;
      text-decoration: none;
      
      
      &:hover {
        color: #000;
        text-decoration: none;
      }
    }
  }
`

export default NewsPage
