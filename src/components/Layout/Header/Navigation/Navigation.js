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
import { FaBars } from "react-icons/fa"
//Components
// import OutButton from "../../../Utility/OutButton/OutButton"

const Navigation = () => {
  const [menu, toggleMenu] = useState(false)

  return (
    <nav className={styles.Navigation}>
      <div className={styles.DesktopNav}>
        {links.map(({ path, text, subLinks }, i) => (
          <div
            className={styles.MenuItemWrapper}
            style={{ position: "relative" }}
            key={text}
          >
            <Link
              to={path}
              activeClassName="active"
              key={i}
              partiallyActive={text !== "Home" ? true : false}
            >
              {text}
            </Link>
            {text === "Fair Info" && (
              <div className={styles.InfoSubMenu}>
                {subLinks.map((subLink, i) => {
                  return (
                    <Link to={subLink.path} key={i}>
                      {subLink.text}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      <Slide right when={menu}>
        {menu && (
          <div className={styles.MobileNav}>
            {links.map(({ path, text, subLinks }, i) => (
              <>
                <Link to={path} tabIndex="-1" activeClassName="active" key={i}>
                  {text}
                </Link>
                {subLinks &&
                  subLinks.map((subLink, i) => {
                    return (
                      <Link
                        to={subLink.path}
                        key={i + 100}
                        activeClassName="active"
                        className={styles.SubLink}
                      >
                        {subLink.text}
                      </Link>
                    )
                  })}
              </>
            ))}
            {/* <div>
              <OutButton
                path="https://www.ticketmelon.com"
                text="Buy Tickets"
                type="2"
              />
            </div> */}
          </div>
        )}
      </Slide>

      <Fade when={menu}>
        {menu && (
          <div
            className={styles.Backdrop}
            onClick={() => {
              toggleMenu(false)
            }}
          />
        )}
      </Fade>

      <div
        className={styles.MenuButton}
        onClick={() => {
          toggleMenu(!menu)
        }}
      >
        <FaBars />
      </div>
    </nav>
  )
}

export default Navigation
