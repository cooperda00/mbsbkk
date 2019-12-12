//Modules
import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
//Sass
import styles from "./FairInfo.module.scss"
//Components
import SideMenu from "./SideMenu/SideMenu"
import HZDirectory from "../HZDirectory/HZDirectory"
import CMHealingZoneSchedule from "../Schedules/CMHealingZoneSchedule/CMHealingZoneSchedule"

const HealingZone = ({ copy }) => {
  return (
    <section className={styles.FairInfo}>
      <div className={styles.Container}>
        <SideMenu />

        <div className={styles.Copy}>
          <div className={styles.HTML}>
            {documentToReactComponents(copy.mainText.json)}

            <CMHealingZoneSchedule />

            <HZDirectory />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HealingZone
