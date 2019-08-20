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
          <h2>The Mind Body Spirit Fair Bangkok</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
            perferendis sapiente sunt accusamus molestias in adipisci suscipit
            quidem placeat laborum itaque optio, vitae aspernatur repudiandae,
            saepe ut dignissimos dolore maxime.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
            perferendis sapiente sunt.
          </p>

          <div>
            <CTAButton path="/about" text="Our Story" />
          </div>
        </div>

        <div className={styles.Right}>
          <h2>Next Event Details:</h2>

          <p>Dates: To Be Announced</p>
          <p>Time: 10am - 6pm</p>
          <p>Venue: To Be Announced</p>

          <div>
            <CTAButton path="/get-involved" text="Get Involved" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicInfo
