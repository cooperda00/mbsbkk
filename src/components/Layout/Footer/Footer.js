//Modules
import React from "react"
//Sass
import styles from "./Footer.module.scss"
//Constants
import { social } from "../../../constants/social"
//Components
import InstagramWidgetSmall from "../../Utility/InstagramWidgetSmall/InstagramWidgetSmall"
import MailChimp from "../../Utility/MailChimp/MailChimp"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterNav}>
        <div className={styles.Links}>
          <p>Get In Touch:</p>

          <div className={styles.Icons}>
            {social.map((link, i) => {
              return (
                <a href={link.path} key={i}>
                  {link.icon}
                </a>
              )
            })}
          </div>
        </div>

        <MailChimp />
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
    </footer>
  )
}

export default Footer
