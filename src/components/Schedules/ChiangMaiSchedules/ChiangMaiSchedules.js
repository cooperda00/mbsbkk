//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//Sass
import styles from "./ChiangMaiSchedules.module.scss"

const ChiangMaiSchedules = () => {
  const data = useStaticQuery(query)
  const { saturday, sunday, aSaturday, aSunday, bSaturday, bSunday } = data

  return (
    <div className={styles.ChiangMaiSchedules}>
      <h3>Seminar: Saturday</h3>
      <div className={styles.Table}>
        <div>10:00 - 10:50</div>
        <div>{saturday.one}</div>

        <div>11:00 - 11:50</div>
        <div>{saturday.two}</div>

        <div>12:00 - 12:50</div>
        <div>{saturday.three}</div>

        <div>13:00 - 13:50</div>
        <div>{saturday.four}</div>

        <div>14:00 - 14:50</div>
        <div>{saturday.five}</div>

        <div>15:00 - 15:50</div>
        <div>{saturday.six}</div>

        <div>16:00 - 16:50</div>
        <div>{saturday.seven}</div>

        <div>17:00 - 17:50</div>
        <div>{saturday.eight}</div>
      </div>

      <h3>Seminar: Sunday</h3>
      <div className={styles.Table}>
        <div>10:00 - 10:50</div>
        <div>{sunday.one}</div>

        <div>11:00 - 11:50</div>
        <div>{sunday.two}</div>

        <div>12:00 - 12:50</div>
        <div>{sunday.three}</div>

        <div>13:00 - 13:50</div>
        <div>{sunday.four}</div>

        <div>14:00 - 14:50</div>
        <div>{sunday.five}</div>

        <div>15:00 - 15:50</div>
        <div>{sunday.six}</div>

        <div>16:00 - 16:50</div>
        <div>{sunday.seven}</div>

        <div>17:00 - 17:50</div>
        <div>{sunday.eight}</div>
      </div>

      <h3>Workshop A: Saturday</h3>
      <div className={styles.Table}>
        <div>10:00 - 10:50</div>
        <div>{aSaturday.one}</div>

        <div>11:00 - 11:50</div>
        <div>{aSaturday.two}</div>

        <div>12:00 - 12:50</div>
        <div>{aSaturday.three}</div>

        <div>13:00 - 13:50</div>
        <div>{aSaturday.four}</div>

        <div>14:00 - 14:50</div>
        <div>{aSaturday.five}</div>

        <div>15:00 - 15:50</div>
        <div>{aSaturday.six}</div>

        <div>16:00 - 16:50</div>
        <div>{aSaturday.seven}</div>

        <div>17:00 - 17:50</div>
        <div>{aSaturday.eight}</div>
      </div>

      <h3>Workshop A: Sunday</h3>
      <div className={styles.Table}>
        <div>10:00 - 10:50</div>
        <div>{aSunday.one}</div>

        <div>11:00 - 11:50</div>
        <div>{aSunday.two}</div>

        <div>12:00 - 12:50</div>
        <div>{aSunday.three}</div>

        <div>13:00 - 13:50</div>
        <div>{aSunday.four}</div>

        <div>14:00 - 14:50</div>
        <div>{aSunday.five}</div>

        <div>15:00 - 15:50</div>
        <div>{aSunday.six}</div>

        <div>16:00 - 16:50</div>
        <div>{aSunday.seven}</div>

        <div>17:00 - 17:50</div>
        <div>{aSunday.eight}</div>
      </div>

      <h3>Workshop B: Saturday</h3>
      <div className={styles.Table}>
        <div>10:00 - 10:50</div>
        <div>{bSaturday.one}</div>

        <div>11:00 - 11:50</div>
        <div>{bSaturday.two}</div>

        <div>12:00 - 12:50</div>
        <div>{bSaturday.three}</div>

        <div>13:00 - 13:50</div>
        <div>{bSaturday.four}</div>

        <div>14:00 - 14:50</div>
        <div>{bSaturday.five}</div>

        <div>15:00 - 15:50</div>
        <div>{bSaturday.six}</div>

        <div>16:00 - 16:50</div>
        <div>{bSaturday.seven}</div>

        <div>17:00 - 17:50</div>
        <div>{bSaturday.eight}</div>
      </div>

      <h3>Workshop B: Sunday</h3>
      <div className={styles.Table}>
        <div>10:00 - 10:50</div>
        <div>{bSunday.one}</div>

        <div>11:00 - 11:50</div>
        <div>{bSunday.two}</div>

        <div>12:00 - 12:50</div>
        <div>{bSunday.three}</div>

        <div>13:00 - 13:50</div>
        <div>{bSunday.four}</div>

        <div>14:00 - 14:50</div>
        <div>{bSunday.five}</div>

        <div>15:00 - 15:50</div>
        <div>{bSunday.six}</div>

        <div>16:00 - 16:50</div>
        <div>{bSunday.seven}</div>

        <div>17:00 - 17:50</div>
        <div>{bSunday.eight}</div>
      </div>
    </div>
  )
}

const query = graphql`
  {
    saturday: contentfulChiangMaiSeminarSchedule(day: { eq: "Saturday" }) {
      one
      two
      three
      four
      five
      six
      seven
      eight
    }

    sunday: contentfulChiangMaiSeminarSchedule(day: { eq: "Sunday" }) {
      one
      two
      three
      four
      five
      six
      seven
      eight
    }

    aSaturday: contentfulChiangMaiWorkshopASchedule(day: { eq: "Saturday" }) {
      one
      two
      three
      four
      five
      six
      seven
      eight
    }

    aSunday: contentfulChiangMaiWorkshopASchedule(day: { eq: "Sunday" }) {
      one
      two
      three
      four
      five
      six
      seven
      eight
    }

    bSaturday: contentfulChiangMaiWorkshopBSchedule(day: { eq: "Saturday" }) {
      one
      two
      three
      four
      five
      six
      seven
      eight
    }

    bSunday: contentfulChiangMaiWorkshopBSchedule(day: { eq: "Sunday" }) {
      one
      two
      three
      four
      five
      six
      seven
      eight
    }
  }
`

export default ChiangMaiSchedules
