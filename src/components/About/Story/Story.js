//Module
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./Story.module.scss"

const Story = () => {
  const data = useStaticQuery(query)
  const image = data.image.childImageSharp.fluid
  const image2 = data.image2.childImageSharp.fluid
  const image3 = data.image3.childImageSharp.fluid

  return (
    <div className={styles.Story}>
      <div className={styles.Left}>
        <div className={`${styles.ImageContainer} ${styles.Image2}`}>
          <Image fluid={image2} className={styles.Image} />
        </div>
        <div className={`${styles.ImageContainer} ${styles.Image2}`}>
          <Image fluid={image} className={styles.Image} />
        </div>
        <div className={`${styles.ImageContainer} ${styles.Image2}`}>
          <Image fluid={image3} className={styles.Image} />
        </div>
      </div>
      <div className={styles.Right}>
        <h2>About Us</h2>
        <h3>Arrive Curious, Leave Inspired</h3>
        <p>
          Finding your tribe in the sprawling jungle of Bangkok is no mean feat,
          and yet it is all here - if you know where to look.
        </p>

        <p>
          Maybe you have been looking for health, wellness and holistic
          solutions, people of a like mind or a supportive, wholehearted
          community. Maybe you are curious about the wellbeing modalities
          available to you in the region. Allow us to show you, all in one
          inspiring weekend.
        </p>

        <p>
          Our passionately held vision at MBSBKK is to bring together holistic
          health, wellbeing and sustainability practitioners, to create a rich
          community and to inspire positive change individually, locally and
          globally.
        </p>

        <p>
          A friendly and supportive space to share, connect, learn and grow,
          through experiences, high quality services and products. A wealth of
          expertise, knowledge and passion, all of which gives back, supporting
          local charitable causes.
        </p>

        <p>
          We have been delighted and joyously overwhelmed by the response,
          support and enthusiasm we’ve received in birthing this exciting and
          inspiring event. Our first event in 2018 was an enormous success, with
          over 600 visitors, raising 220,000 baht for local charity projects.
        </p>

        <p>
          We hope you will find something here for you. Something that will
          support and inspire you on your journey. Join us, there’s so much
          waiting to be found.
        </p>
      </div>
    </div>
  )
}

const query = graphql`
  {
    image: file(relativePath: { eq: "stall_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image2: file(relativePath: { eq: "vendor_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image3: file(relativePath: { eq: "fair_info.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Story
