import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { StaticImage } from "gatsby-plugin-image"

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <StaticImage
          src="../images/slide1.jpg"
          className="d-block w-100"
          formats={["AUTO", "WEBP"]}
          alt="InRome"
        />
        <Carousel.Caption>
          <h3>LORE IPSUM DOLOR SIT AMET</h3>
          <span className="subTitle">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </span>
          <br></br>
          <button className="btn btn-primary m-4">LINK</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          src="../images/slide1.jpg"
          className="d-block w-100"
          formats={["AUTO", "WEBP"]}
          alt="InRome"
        />
        <Carousel.Caption>
          <h3>LORE IPSUM DOLOR SIT AMET</h3>
          <span className="subTitle">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </span>
          <br></br>
          <button className="btn btn-primary m-4">LINK</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          src="../images/slide1.jpg"
          className="d-block w-100"
          formats={["AUTO", "WEBP"]}
          alt="InRome"
        />
        <Carousel.Caption>
          <h3>LORE IPSUM DOLOR SIT AMET</h3>
          <span className="subTitle">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </span>
          <br></br>
          <button className="btn btn-primary m-4">LINK</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slide
