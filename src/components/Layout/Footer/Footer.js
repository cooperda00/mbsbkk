//Modules
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./Footer.module.scss"
//Constants
import { social } from "../../../constants/social"
//Components
import InstagramWidgetSmall from "../../Utility/InstagramWidgetSmall/InstagramWidgetSmall"
// import MailChimp from "../../Utility/MailChimp/MailChimp"

const Footer = () => {
  const data = useStaticQuery(query)

  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterNav}>
        <div className={styles.Links}>
          <p>Get In Touch</p>

          <div className={styles.Icons}>
            {social.map((link, i) => {
              return (
                <a href={link.path} key={i} aria-label={link.label}>
                  {link.icon}
                </a>
              )
            })}
          </div>
        </div>

        <a
          href="https://www.flexilexi-fitness.com"
          className={styles.Sponsor}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            fluid={data.sponsorImage.childImageSharp.fluid}
            className={styles.SponsorImage}
          />
        </a>

        {/* <MailChimp text="Stay In The Loop With Our Newsletter" /> */}
      </div>

      <div className={styles.InstagramWidget}>
        <InstagramWidgetSmall />
      </div>

      <div className={styles.FacebookWidget}>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmbsbkk&tabs=timeline&width=300&height=370&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
          width="300"
          height="370"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="Facebook Widget"
        ></iframe>
      </div>

      <div className={styles.Credit}>
        <p>
          Developed by{" "}
          <a
            href="https://danielcooper.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            danielcooper.io
          </a>
        </p>
      </div>
    </footer>
  )
}

const query = graphql`
  {
    sponsorImage: file(relativePath: { eq: "flexi_lexi_sponsor_logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Footer
