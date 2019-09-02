//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./Header.module.scss"
//Images
import headerLogo from "../../../images/logo_transparent.png"
// import headerLogo from "../../../images/logo_long.png"
//Components
import Navigation from "./Navigation/Navigation"
import Social from "./Social/Social"

const Header = () => {
  return (
    <header className={styles.Header}>
      <Link to="/">
        <img
          src={headerLogo}
          alt="Mind Body SPirit Fair Logo"
          className={styles.Logo}
        />
      </Link>
      <div className={styles.Menu}>
        <Social />
        <Navigation />
      </div>
    </header>
  )
}

export default Header
