import React from "react"
import MailChimp from "../Utility/MailChimpModal/MailChimp"
import styles from "./NewsletterModal.module.scss"

const NewsletterModal = ({ setShowModal }) => {
  return (
    <div className={styles.NewsletterModal}>
      <div className={styles.FormContainer}>
        <button
          className={styles.CloseModalButton}
          onClick={() => {
            setShowModal(false)
            localStorage.setItem("modal", "viewed")
          }}
          tabIndex="1"
        >
          X
        </button>
        <p className={styles.ModalCopy}>
          Want to keep up to date with all of our news?
        </p>
        <p className={styles.ModalCopy}>Sign up for our newsletter below!</p>
        <MailChimp />
      </div>
    </div>
  )
}

export default NewsletterModal
