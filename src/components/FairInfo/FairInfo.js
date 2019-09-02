//Modules
import React from "react"
//Sass
import styles from "./FairInfo.module.scss"
//Components
// import Copy from "../Utility/Copy/Copy"
import CopyMDX from "../Utility/CopyMDX/CopyMDX"
import SideMenu from "./SideMenu/SideMenu"

const FairInfo = ({ copy }) => {
  const html = copy.body

  return (
    <section className={styles.FairInfo}>
      <div className={styles.Container}>
        <SideMenu />

        <CopyMDX mdx={html} />
      </div>
    </section>
  )
}

export default FairInfo
