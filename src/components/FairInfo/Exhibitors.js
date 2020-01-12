//Modules
import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
//Sass
import styles from "./FairInfo.module.scss"
//Components
import SideMenu from "./SideMenu/SideMenu"
import VendorDirectory from "../VendorDirectory/VendorDirectory"

const Exhibitors = ({ copy, vendors }) => {
  return (
    <section className={styles.FairInfo}>
      <div className={styles.Container}>
        <SideMenu />

        <div className={styles.Copy}>
          <div className={styles.HTML}>
            {documentToReactComponents(copy.mainText.json)}

            <VendorDirectory vendors={vendors} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exhibitors
