import * as React from "react"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Team from "../components/team"

const PageTeam = () => (
  <Layout>
    <Team />
  </Layout>
)

export default PageTeam

export const Head = () => <Seo />
