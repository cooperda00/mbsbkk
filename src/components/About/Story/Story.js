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

  return (
    <div className={styles.Story}>
      <div className={styles.Left}>
        <div className={styles.ImageContainer}>
          <Image fluid={image} />
        </div>
        <div className={`${styles.ImageContainer} ${styles.Image2}`}>
          <Image fluid={image2} />
        </div>
      </div>

      <div className={styles.Right}>
        <h3>Arrive curious, leave inspired</h3>

        <p>
          Finding your tribe in the sprawling jungle of Bangkok is no mean feat,
          and yet it is all here - if you know where to look.
        </p>

        <p>
          Maybe you have been looking for health, wellness and holistic
          solutions, People of a like mind or a supportive, wholehearted
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
          <strong>
            Our passionately held vision is to bring together holistic health,
            wellbeing and sustainability practitioners, to create a community,
            to build connection and to inspire positive change. A space where
            the uninitiated seeker might easily find what they are seeking, and
            that which is seeking them. Arriving with curiosity and leaving with
            inspiration. A wealth of expertise, knowledge and passion, which
            also gives back, supporting local charitable causes.
          </strong>
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

      {/* <div className={styles.Right}>
        <p>
          The Mind Body and Spirit Fair Bangkok is the brainchild of Evelin Nagy
          and Alison Shale, two long term Thailand dwellers. Both yoga teachers
          and holistic health crazies, with an excitement to bring people
          together, to learn, share, inspire and be inspired.
        </p>

        <h3>So what’s the story?</h3>

        <p>
          We met around 3 years ago connected through a mutual love of yoga,
          astrology, spirituality, and health and wellbeing.
        </p>

        <p>
          Finding your tribe in the sprawling dispersive jungle of Bangkok is no
          mean feat, and yet it is all here - if you know where to look.
        </p>

        <p>
          Our passionately held vision is to bring together holistic health,
          wellbeing and sustainability practitioners, to create a community, to
          build connection and to inspire positive change. A space where the
          uninitiated seeker might easily find what they are seeking, and that
          which is seeking them. Arriving with curiosity and leaving with
          inspiration. A wealth of expertise, knowledge and passion, which also
          gives back, supporting local charitable causes.
        </p>

        <p>
          We have been delighted and joyously overwhelmed by the response,
          support and enthusiasm we have received in birthing this exciting and
          inspiring event. Our first event in 2018 was an enormous success, with
          over 600 visitors, raising 220,000 baht for local charity projects.
        </p>

        <p>
          We hope you will find something here for you. Something that will
          support and inspire you on your journey.
        </p>

        <p>Join us, there’s so much waiting to be found.</p>
      </div> */}
    </div>
  )
}

const query = graphql`
  {
    image: file(relativePath: { eq: "evelin_alison.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "lotus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Story
