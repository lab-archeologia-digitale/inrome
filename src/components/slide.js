import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

function Slide() {
  return (
    <Slider>
      <Carousel>
        <Carousel.Item>
          <StaticImage
            src="../images/slide1.jpg"
            className="d-block w-100"
            formats={["AUTO", "WEBP"]}
            alt="InRome"
          />
          <Carousel.Caption>
            <Styledh3>The website is under construction</Styledh3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Slider>
  )
}
const Styledh3 = styled.h3`
  background: rgba(0,0,0,.5);
  padding: 2rem;
`
//style
const Slider = styled.section`
  .slide {
    min-height: auto;
    border-bottom: #3e281c solid 10px;
  }
  .subTitle {
    text-align: center;
  }
  .btn-primary {
    background-color: #8b5a40 !important;
    color: #fff;
    border-color: #8b5a40;
    padding-left: 40px;
    padding-right: 40px;
  }
  .btn:hover {
    border-color: #3e281c;
  }
`

export default Slide
