import * as React from "react"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Credits from "../components/credits.js"

const PageCredits = () => (
  <Layout>
    <Credits />
  </Layout>
)

export default PageCredits

export const Head = () => <Seo />
