import * as React from "react"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Outputs from "../components/outputs.js"

const PageOutputs = () => (
  <Layout>
    <Outputs />
  </Layout>
)

export default PageOutputs

export const Head = () => <Seo />
