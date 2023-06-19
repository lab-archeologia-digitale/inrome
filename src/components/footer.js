import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer>
      <div className="d-flex navbar-topbar">
        <div className="navbar-brand p-4">
          <a href="/">
            <StaticImage
              src="../images/INRome_logo_def.png"
              width={140}
              quality={30}
              formats={["AUTO", "WEBP"]}
              alt="InRome"
              className="img-fluid"
            />
          </a>
          <p className="header-title">© Scuola Normale Superiore</p>
        </div>
        <div className="p-4 footerLink">
          SITE MAP - PRIVACY POLICIES - CONTACT
        </div>
        <div className="p-4">
          {" "}
          <a href="/">
            <StaticImage
              src="../images/erc-logo.svg"
              height={71}
              quality={30}
              formats={["AUTO", "WEBP"]}
              alt="erc-logo"
              className="img-fluid"
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
              className="img-fluid"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
