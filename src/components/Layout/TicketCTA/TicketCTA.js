//Modules
import React, { useEffect } from "react"
//Sass
import styles from "./TicketCTA.module.scss"

const TicketCTA = () => {
  //Dont show on individual blog view (less ugly)
  useEffect(() => {
    if (
      typeof window !== undefined &&
      !window.location.href.includes("/blog/")
    ) {
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
    } else {
      return null
    }
  }, [])
}

export default TicketCTA
