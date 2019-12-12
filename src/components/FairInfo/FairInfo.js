//Modules
import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
//Sass
import styles from "./FairInfo.module.scss"
//Components
import SideMenu from "./SideMenu/SideMenu"
import MailChimpContainer from "../Spacing/MailChimpContainer/MailChimpContainer"
import SocialContainer from "../Spacing/SocialContainer/SocialContainer"
import MailChimp from "../Utility/MailChimp/MailChimp"
import Social from "../Layout/Header/Social/Social"

const FairInfo = ({ copy }) => {
  return (
    <section className={styles.FairInfo}>
      <div className={styles.Container}>
        <SideMenu />

        <div className={styles.Copy}>
          <div className={styles.HTML}>
            {documentToReactComponents(copy.mainText.json)}

            <hr />

            {documentToReactComponents(copy.newsletter.json)}

            <MailChimpContainer>
              <MailChimp />
            </MailChimpContainer>

            <p>
              Follow us on social media to stay informed as announcements are
              made - links below.
            </p>

            <SocialContainer>
              <Social />
            </SocialContainer>

            <hr />

            {documentToReactComponents(copy.sustainability.json)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FairInfo
