//Modules
import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
//Sass
import styles from "./BasicInfo.module.scss"
import CTAButton from "../Utility/CTAButton/CTAButton"
import OutButton from "../Utility/OutButton/OutButton"

const BasicInfo = ({ copy }) => {
  return (
    <section className={styles.BasicInfo}>
      <div className={styles.CardContainer}>
        <div className={styles.Left}>
          <div>{documentToReactComponents(copy.mainText.json)}</div>

          <div>
            <CTAButton path="/about" text="Our Story" />
          </div>
        </div>

        <div className={styles.Right}>
          <h2>Event Details:</h2>

          {/* <h3>Bangkok</h3>
          <p>Dates: 29th February - 1st March 2020</p>
          <p>Time: 9:30am - 5pm</p>
          <p>
            Venue:{" "}
            <a href="https://goo.gl/maps/MToD7u3Gn7BDquKH8">
              Jasmine City Hotel, Asok
            </a>{" "}
          </p> */}

          <div>{documentToReactComponents(copy.eventDetails.json)}</div>

          {/* <div className={styles.ButtonContainer}>
            <CTAButton path="/get-involved" text="Get Involved" />
            <OutButton
              path="https://www.ticketmelon.com/mbsfairbkk/mindbodyspiritfairbangkok"
              text="Buy Tickets"
              type="1"
            />
          </div> */}

          {/* <h3>Chiang Mai</h3>
          <p>Dates: 30th November - 1st December 2019</p>
          <p>Time: 9:30am - 5:30pm</p>
          <br />
          <p>Tickets:</p>
          <p>Online: ฿300 1 Day / ฿500 2 Days</p>
          <p>Door: ฿400 1 Day / ฿700 2 Days</p>
          <p>
            <em>All workshops are free after admission.</em>
          </p>
          <br />
          <p>
            Venue:{" "}
            <a href="https://goo.gl/maps/LPfGs6XuV9yvQqWr8">ChiangMai&Co</a>{" "}
          </p>
          <p>
            <em>
              The event venue is an outdoor space. There will be limited parking
              available.
            </em>
          </p> */}

          {/* <div className={styles.ButtonContainer}>
            <OutButton
              path="https://www.ticketmelon.com/mbsfairbkk/mindbodyspiritfairchiangmai"
              text="Book Now"
              type="2"
            />
          </div> */}

          {copy.eventDetailsExtra.json && (
            <div>{documentToReactComponents(copy.eventDetailsExtra.json)}</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BasicInfo
