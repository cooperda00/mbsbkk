//Modules
import React from "react"
//Sass
import styles from "./BasicInfo.module.scss"
import CTAButton from "../Utility/CTAButton/CTAButton"

const BasicInfo = () => {
  return (
    <section className={styles.BasicInfo}>
      <div className={styles.CardContainer}>
        <div className={styles.Left}>
          <h2>Totally Non-profit, Totally Charitable, Totally Inspiring!</h2>

          <p>
            Holistic health, well-being and spiritual practitioners and vendors
            in one event, celebrating all things mind, body and spirit!
          </p>

          <p>
            The Mind, Body and Spirit Fair is Bangkok’s first dedicated health,
            well-being and natural therapies event. This community charity event
            brings together a diversity of local and international mind, body
            and spirit practitioners, vendors and businesses, to share their
            expertise and passions with the people of Bangkok.
          </p>

          <div>
            <CTAButton path="/about" text="Our Story" />
          </div>
        </div>

        <div className={styles.Right}>
          <h2>Next Event Details:</h2>

          <p>Dates: 1-2 February 2020</p>
          <p>Time: 9am-6pm</p>
          <p>
            Venue:{" "}
            <a href="https://goo.gl/maps/76EQNyY2xHzU6qHC6">
              Jasmine Building, Asok
            </a>{" "}
          </p>

          <div>
            <CTAButton path="/get-involved" text="Get Involved" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicInfo
