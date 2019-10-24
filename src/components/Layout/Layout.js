//Modules
import React from "react"
//Sass
import styles from "./Layout.module.scss"
import "./base.scss"
//Components
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import TicketCTA from "./TicketCTA/TicketCTA"

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <TicketCTA />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
