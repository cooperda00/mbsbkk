//Modules
import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
//Sass
import styles from "./FairInfo.module.scss"
//Components
import SideMenu from "./SideMenu/SideMenu"
import WorkshopDirectory from "../WorkshopDirectory/WorkshopDirectory"
import Schedules from "../Schedules/Schedules"

const Workshops = ({ copy }) => {
  return (
    <section className={styles.FairInfo}>
      <div className={styles.Container}>
        <SideMenu />

        <div className={styles.Copy}>
          <div className={styles.HTML}>
            {documentToReactComponents(copy.mainText.json)}

            <Schedules />

            <hr />

            <WorkshopDirectory />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workshops
