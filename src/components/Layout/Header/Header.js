//Modules
import React from "react"
//Sass
import styles from "./Header.module.scss"
//Images
import headerLogo from "../../../images/logo_long.png"
//Components
import Navigation from "./Navigation/Navigation"

const Header = () => {
  return (
    <header className={styles.Header}>
      <img src={headerLogo} alt="logo" className={styles.Logo} />

      <Navigation />
    </header>
  )
}

export default Header
