import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import Menu from "../components/menu"

const Navbar = ({ siteTitle }) => {
  return (
    <header>
      <div className="d-flex navbar-topbar">
        <div className="p-3 me-auto">
          <a href="/">
            <StaticImage
              src="../images/INRome_logo_def.png"
              width={250}
              formats={["AUTO", "WEBP"]}
              alt={ siteTitle }
            />
          </a>
          <p className="header-title">
            { siteTitle }
          </p>
        </div>
        <div className="p-3">
          {" "}
          <a href="/">
            <StaticImage
              src="../images/erc-logo.svg"
              height={71}
              quality={30}
              formats={["AUTO", "WEBP"]}
              alt="erc"
            />
          </a>
        </div>
        <div className="p-4">
          {" "}
          <a href="/">
            <StaticImage
              src="../images/logo-sns@2x_0.png"
              height={71}
              quality={30}
              formats={["AUTO", "WEBP"]}
              alt="SNS"
            />
          </a>
        </div>
      </div>
      <Menu />
    </header>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
