import * as React from "react"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Contacts from "../components/contact.js"

const PageContact = () => (
  <Layout>
    <Contacts />
  </Layout>
)

export default PageContact

export const Head = () => <Seo />
