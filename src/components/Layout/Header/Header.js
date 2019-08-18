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

const Header = () => {
  return (
    <header className={styles.Header}>
      <Link to="/">
        <img src={headerLogo} alt="logo" className={styles.Logo} />
      </Link>

      <Navigation />
    </header>
  )
}

export default Header
