//Modules
import React from "react"
//Sass
import styles from "./GetInvolved.module.scss"
//Constants

//Components
import CopyMDX from "../Utility/CopyMDX/CopyMDX"
import SideMenu from "./SideMenu/SideMenu"
import TopMenu from "../Utility/TopMenu/TopMenu"

const GetInvolved = ({ mdx }) => {
  return (
    <section className={styles.GetInvolved}>
      <div className={styles.Container}>
        {/* <TopMenu /> */}

        <SideMenu />

        <CopyMDX mdx={mdx} />
      </div>
    </section>
  )
}

export default GetInvolved
