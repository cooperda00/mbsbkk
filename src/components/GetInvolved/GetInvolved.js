//Modules
import React from "react"
//Sass
import styles from "./GetInvolved.module.scss"
//Components
import CopyMDX from "../Utility/CopyMDX/CopyMDX"
import SideMenu from "./SideMenu/SideMenu"

const GetInvolved = ({ mdx }) => {
  return (
    <section className={styles.GetInvolved}>
      <div className={styles.Container}>
        <SideMenu />

        <CopyMDX mdx={mdx} />
      </div>
    </section>
  )
}

export default GetInvolved
