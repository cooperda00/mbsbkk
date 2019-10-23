//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./HZTimetable.module.scss"

const Timetable = ({ title, timetable }) => {
  console.log(timetable)
  return (
    <>
      <h3>{title}</h3>
      <div className={styles.Timetable}>
        <div>AM</div>
        <div className={styles.List}>
          {timetable.am.map(item => {
            return (
              <Link
                to={`/fair-info/healing-zone/${item.slug}`}
                key={item.slug}
                className={styles.ListItem}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        <div>PM</div>
        <div className={styles.List}>
          {timetable.pm.map(item => {
            return (
              <Link
                to={`/fair-info/healing-zone/${item.slug}`}
                key={item.slug}
                className={styles.ListItem}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Timetable
