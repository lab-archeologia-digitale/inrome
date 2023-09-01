import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import "./layout.scss"
import FooterPage from "./footer"
import MainMenu from "../components/menu"

const Layout = ({ children, lang }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-fluid p-0">
      <Navbar lang={lang} siteTitle={data.site.siteMetadata?.title || `Title`} />
      <MainMenu lang={lang} />
      <main>{children}</main>
      <FooterPage />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
