//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./TopMenu.module.scss"

const TopMenu = ({ links }) => {
  return (
    <div className={styles.TopMenu}>
      <div className={styles.InfoCard}>
        <p>
          Event Date:
          <span>1 - 2 February 2020</span>
        </p>
        <p>
          Event Time:
          <span>9am - 6pm</span>
        </p>
        <p>
          Event Location:{" "}
          <span>
            <a href="https://goo.gl/maps/MToD7u3Gn7BDquKH8">
              Jasmine City Hotel, Asok
            </a>
          </span>
        </p>
      </div>

      <div className={styles.Links}>
        {links
          ? links.map((link, i) => {
              return (
                <Link to={link.path} key={i} activeClassName="active">
                  {link.text}
                </Link>
              )
            })
          : undefined}
      </div>
    </div>
  )
}

export default TopMenu
