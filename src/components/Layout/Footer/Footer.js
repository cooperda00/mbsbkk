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
              <Link to={link.path} key={i} activeClassName="active">
                {link.text}
              </Link>
            )
          })}
        </div>
        <p>
          Get In Touch: <a href="mailto:info@mbsbkk.com">info@mbsbkk.com</a>
        </p>
      </div>

      <div className={styles.FacebookWidget}>
        {/* <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmbsbkk&tabs=timeline&width=310&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
          width="310"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe> */}
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmbsbkk&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
          width="300"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="Facebook Widget"
        ></iframe>
      </div>

      <div className={styles.InstagramWidget}>
        <InstagramWidgetSmall />
      </div>
    </footer>
  )
}

export default Footer
