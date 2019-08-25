//Modules
import React, { useState } from "react"
import { Link } from "gatsby"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./Navigation.module.scss"
//Constants
import { links } from "../../../../constants/links"
//Icons
import { FaPrayingHands } from "react-icons/fa"

const Navigation = () => {
  const [menu, toggleMenu] = useState(false)

  return (
    <nav className={styles.Navigation}>
      <div className={styles.DesktopNav}>
        {links.map(({ path, text }, i) => (
          <Link to={path} activeClassName="active" key={i}>
            {text}
          </Link>
        ))}
      </div>

      <Slide right when={menu}>
        {menu && (
          <div className={styles.MobileNav}>
            {links.map(({ path, text }, i) => (
              <Link to={path} tabIndex="-1" activeClassName="active" key={i}>
                {text}
              </Link>
            ))}
          </div>
        )}
      </Slide>

      <Fade when={menu}>{menu && <div className={styles.Backdrop} />}</Fade>

      <div
        className={styles.MenuButton}
        onClick={() => {
          toggleMenu(!menu)
        }}
      >
        <FaPrayingHands />
      </div>
    </nav>
  )
}

export default Navigation
