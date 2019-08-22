//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./Footer.module.scss"
//Constants
import { links } from "../../../constants/links"
//Components
import InstagramWidgetSmall from "../../Utility/InstagramWidgetSmall/InstagramWidgetSmall"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterNav}>
        <div className={styles.Links}>
          {links.map((link, i) => {
            return (
              <Link to={link.path} key={i}>
                {link.text}
              </Link>
            )
          })}
        </div>
      </div>

      <div className={styles.FacebookWidget}>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMBSBKK&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="320"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>

      <div className={styles.InstagramWidget}>
        <InstagramWidgetSmall />
      </div>
    </footer>
  )
}

export default Footer
