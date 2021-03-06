//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./Header.module.scss"
//Images
import headerLogo from "../../../images/logo_v2.jpg"
// import headerLogo from "../../../images/logo_transparent.png"
// import headerLogo from "../../../images/logo_long.png"
//Components
import Navigation from "./Navigation/Navigation"
import Social from "./Social/Social"

const Header = ({ location }) => {
  return (
    <header className={styles.Header}>
      <Link to="/">
        <img
          src={headerLogo}
          alt="Mind Body Spirit Fair Logo"
          className={styles.Logo}
        />
      </Link>
      <div className={styles.Menu}>
        <Social header={true} />
        <Navigation location={location} />
      </div>
    </header>
  )
}

export default Header
