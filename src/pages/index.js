import * as React from "react"

// component
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Slide from "../components/slide"
import Home from "../components/home"

const IndexPage = () => (
  <Layout>
    <div className="slide">
      <Slide />
    </div>
    <Home />
  </Layout>
)

export default IndexPage

export const Head = () => <Seo />
