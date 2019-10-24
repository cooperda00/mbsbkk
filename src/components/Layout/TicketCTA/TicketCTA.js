//Modules
import React from "react"
//Sass
import styles from "./TicketCTA.module.scss"

const TicketCTA = () => {
  //Dont show on individual blog view (less ugly)
  if (typeof window !== undefined) {
    if (!window.location.href.includes("/blog/")) {
      return (
        <a
          href="https://www.ticketmelon.com"
          className={styles.TicketCTA}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Buy Tickets</p>
        </a>
      )
    }
  } else {
    return <div></div>
  }
}

export default TicketCTA
