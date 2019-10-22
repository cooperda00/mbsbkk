//Modules
import React from "react"
//Sass
import styles from "./Timetable.module.scss"

const Timetable = ({ title, timetable }) => {
  const { one, two, three, four, five, six, seven, eight } = timetable
  return (
    <>
      <h3>{title}</h3>
      <div className={styles.Timetable}>
        <div>10:00 - 10:50</div>
        <div>{one}</div>

        <div>11:00 - 11:50</div>
        <div>{two}</div>

        <div>12:00 - 12:50</div>
        <div>{three}</div>

        <div>13:00 - 13:50</div>
        <div>{four}</div>

        <div>14:00 - 14:50</div>
        <div>{five}</div>

        <div>15:00 - 15:50</div>
        <div>{six}</div>

        <div>16:00 - 16:50</div>
        <div>{seven}</div>

        {eight && (
          <>
            <div>17:00 - 17:50</div>
            <div>{eight}</div>
          </>
        )}
      </div>
    </>
  )
}

export default Timetable
