//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./About.module.scss"
//Components
import Profiles from "./Profiles/Profiles"
import Story from "./Story/Story"
import Title from "../Utility/Title/Title"

const About = () => {
  return (
    <section className={styles.About}>
      <Story />
      <Title subtitle="Team" />
      <Profiles />
      {/* <Title subtitle="Volunteers" /> */}
      <div className={styles.Volunteers}>
        <h3>Volunteers</h3>
        <p>
          We are deeply grateful for our dedicated an passionate volunteers, who
          are central to facilitating the smooth running of all aspects of the
          event. Thank you from the bottom of our hearts. We love you guys!
        </p>

        <p>
          If you would like to join the Spirit Team and be a volunteer at any of
          our fairs please <Link tp="/get-involved">apply here</Link> or contact
          us for more information.
        </p>
      </div>
    </section>
  )
}

export default About
