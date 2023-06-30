import * as React from "react"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import About from "../components/about.js"

const PageAbout = () => (
  <Layout>
    <About />
  </Layout>
)

export default PageAbout

export const Head = () => <Seo />