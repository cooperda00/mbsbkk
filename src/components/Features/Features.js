//Module
import React from "react"

//Sass
import styles from "./Features.module.scss"
//Components
import Feature from "./Feature/Feature"

const Features = ({ features }) => {
  return (
    <section className={styles.Features}>
      <div className={styles.FeaturesContainer}>
        {features.map(({ node }, i) => {
          if (i % 2) {
            return <Feature node={node} selectedClass="reverse" />
          } else {
            return <Feature node={node} selectedClass="forward" />
          }
        })}
      </div>
    </section>
  )
}

export default Features
