//Modules
import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
import Slide from "react-reveal/Slide"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
//Styling
import styled, { css } from "styled-components"
import styles from "./Carousel.module.scss"

const Carousel = () => {
  const data = useStaticQuery(query)
  const image1 = data.image_1.childImageSharp.fluid
  const image2 = data.image_2.childImageSharp.fluid
  const image3 = data.image_3.childImageSharp.fluid
  const image4 = data.image_4.childImageSharp.fluid
  const image5 = data.image_5.childImageSharp.fluid

  const width = "80vw",
    height = "70vh"

  const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: ${height};
    margin-top: 10rem;

    @media (min-width: 768px) {
      margin-top: 15rem;
    }

    @media (min-width: 1000px) {
      width: ${width};
      margin: 17rem auto 0 auto;
    }
  `
  const Children = styled.div`
    width: 100%;
    position: relative;
    height: ${height};

    @media (min-width: 1000px) {
      width: ${width};
    }
  `
  const Arrow = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 5rem;
    position: absolute;
    text-align: center;
    text-shadow: 2px 2px 3px #000;
    top: 50%;
    transform: translateY(-50%);
    user-select: none;

    z-index: 100;
    ${props =>
      props.right
        ? css`
            right: 2%;
          `
        : css`
            left: 2%;
          `}
  `
  const Dots = styled.span`
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 500;
    bottom: 5%;
    left: 0;

    @media (min-width: 1000px) {
      width: ${width};
    }
  `
  const Dot = styled.span`
    color: white;
    font-size: 3rem;
    cursor: pointer;
    text-shadow: 2px 2px 3px #000;
    user-select: none;
  `

  const CarouselUI = ({ position, total, handleClick, children }) => (
    <Container>
      <Children>
        {children}
        <Arrow onClick={handleClick} data-position={position - 1}>
          {"<"}
        </Arrow>
        <Arrow right onClick={handleClick} data-position={position + 1}>
          {">"}
        </Arrow>
      </Children>
      <Dots>
        {Array(...Array(total)).map((val, index) => (
          <Dot key={index} onClick={handleClick} data-position={index}>
            {index === position ? "● " : "○ "}
          </Dot>
        ))}
      </Dots>
    </Container>
  )
  const Carousel = makeCarousel(CarouselUI)

  return (
    <Carousel defaultWait={5000}>
      <Slide right>
        <div className={styles.SlideContainer}>
          <Image
            fluid={image1}
            className={styles.Img}
            alt="A group of people smiling"
          />
        </div>
      </Slide>
      <Slide right>
        <div className={styles.SlideContainer}>
          <Image fluid={image2} className={styles.Img} alt="Flowers in vases" />
        </div>
      </Slide>
      <Slide right>
        <div className={styles.SlideContainer}>
          <Image
            fluid={image3}
            className={styles.Img}
            alt="A woman spreading her arms"
          />
        </div>
      </Slide>
      <Slide right>
        <div className={styles.SlideContainer}>
          <Image
            fluid={image4}
            className={styles.Img}
            alt="Ingredients laid out on a table"
          />
        </div>
      </Slide>
      <Slide right>
        <div className={styles.SlideContainer}>
          <Image
            fluid={image5}
            className={styles.Img}
            alt="A singing bowl being held over a woman"
          />
        </div>
      </Slide>
    </Carousel>
  )
}

const query = graphql`
  {
    image_1: file(relativePath: { eq: "carousel/carousel1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image_2: file(relativePath: { eq: "carousel/carousel2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image_3: file(relativePath: { eq: "carousel/carousel3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image_4: file(relativePath: { eq: "carousel/carousel4.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image_5: file(relativePath: { eq: "carousel/carousel5.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Carousel
