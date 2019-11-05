//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//Sass
import Styles from "./CMSchedule.module.scss"

const CMSchedule = () => {
  // const data = useStaticQuery(query)
  return (
    <div className={Styles.CMSchedule}>
      <h3>CHIANG MAI</h3>
      <div>table goes here</div>
    </div>
  )
}

// const query = graphql`

// `

export default CMSchedule
