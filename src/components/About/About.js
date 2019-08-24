//Modules
import React from "react"
//Sass
import styles from "./About.module.scss"
//Components
import Profiles from "./Profiles/Profiles"
import Story from "./Story/Story"

const About = () => {
  return (
    <section className={styles.About}>
      <Story />
      <Profiles />
    </section>
  )
}

export default About
