import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import "./layout.scss"
import FooterPage from "./footer"
import MenuPage from "../templates/menu"

const Layout = ({ children }) => {
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
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <MenuPage />
      <main>{children}</main>
      <FooterPage />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
