//Modules
import React, { useState } from "react"
import { Link } from "gatsby"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"
// import { Location } from "@reach/router"
//Sass
import styles from "./Navigation.module.scss"
//Constants
import { links, mobileLinks } from "../../../../constants/links"
//Icons
import { FaBars, FaCaretDown } from "react-icons/fa"
//Components
// import OutButton from "../../../Utility/OutButton/OutButton"

const Navigation = ({ location }) => {
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
            {path ? (
              <Link
                to={path}
                activeClassName="active"
                key={i}
                partiallyActive={text !== "Home" ? true : false}
                className={styles.NavLink}
              >
                {text}
              </Link>
            ) : (
              <p
                className={
                  typeof window !== "undefined" &&
                  location.href.includes("/programs/")
                    ? `${styles.DeadLink} ${styles.DeadLinkActive}`
                    : styles.DeadLink
                }
              >
                {text}
              </p>
            )}

            {text === "Programs" && (
              <>
                <FaCaretDown className={styles.Icon} />
                <div className={styles.InfoSubMenu}>
                  <p className={styles.Bangkok}>Bangkok</p>
                  <Link to="/programs/BKK/exhibitors">Exhibitors</Link>
                  <Link to="/programs/BKK/healing-zone">Healing Zone</Link>
                  <Link to="/programs/BKK/workshops-and-seminars">
                    Workshops and Seminars
                  </Link>
                  <p className={styles.ChiangMai}>Chiang Mai</p>
                  <Link to="/programs/CM/exhibitors">Exhibitors</Link>
                  <Link to="/programs/CM/healing-zone">Healing Zone</Link>
                  <Link to="/programs/CM/workshops-and-seminars">
                    Workshops and Seminars
                  </Link>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <Slide right when={menu}>
        {menu && (
          <div className={styles.MobileNav}>
            {/* <div>
              <OutButton
                path="https://www.ticketmelon.com/mbsfairbkk/mindbodyspiritfairbangkok"
                text="Buy Tickets"
                type="1"
              />
            </div> */}
            {mobileLinks.map(({ path, text, subLinks }, i) => (
              <>
                {path ? (
                  <Link
                    to={path}
                    tabIndex="-1"
                    activeClassName="active"
                    key={i}
                  >
                    {text}
                  </Link>
                ) : (
                  <p
                    className={
                      text === "Bangkok"
                        ? styles.Bangkok
                        : text === "Chiang Mai"
                        ? styles.ChiangMai
                        : null
                    }
                  >
                    {text}
                  </p>
                )}
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
                path="https://www.ticketmelon.com/mbsfairbkk/mindbodyspiritfairbangkok"
                text="Buy Tickets"
                type="1"
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
