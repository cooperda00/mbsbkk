//Modules
import React from "react"
//Sass
import styles from "./FairInfo.module.scss"
//Constants
import { fairInfoLinks } from "../../constants/links"
//Components
import Copy from "../Utility/Copy/Copy"
import SideMenu from "./SideMenu/SideMenu"
// import TopMenu from "../Utility/TopMenu/TopMenu"

const FairInfo = ({ copy }) => {
  const html = copy.html

  return (
    <section className={styles.FairInfo}>
      <div className={styles.Container}>
        {/* <TopMenu links={fairInfoLinks} /> */}

        <SideMenu />

        <Copy html={html} />
      </div>
    </section>
  )
}

export default FairInfo
