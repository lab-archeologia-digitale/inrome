import * as React from "react"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Privacy from "../components/privacy.js"

const PagePrivacy = () => (
  <Layout>
    <Privacy />
  </Layout>
)

export default PagePrivacy

export const Head = () => <Seo />
