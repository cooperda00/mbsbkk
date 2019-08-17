//Modules
import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Slide from "react-reveal/Slide"
//Sass
import styles from "./Navigation.module.scss"
//Constants
import { links, mobileLinks } from "../../../../constants/links"
//Icons
import { FaPrayingHands } from "react-icons/fa"

const Navigation = () => {
  const [menu, toggleMenu] = useState(false)

  return (
    <nav className={styles.Navigation}>
      <div className={styles.DesktopNav}>
        {links.map(({ path, text }) => (
          <Link to={path}>{text}</Link>
        ))}
      </div>

      <Slide top when={menu}>
        <div className={styles.MobileNav}>
          {mobileLinks.map(({ path, text }) => (
            <Link to={path} tabIndex="-1">
              {menu && text}
            </Link>
          ))}
        </div>
      </Slide>

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
