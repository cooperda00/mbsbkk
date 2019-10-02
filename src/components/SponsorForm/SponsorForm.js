//Modules
import React from "react"
//Sass
import styles from "./SponsorForm.module.scss"
//Components
import Title from "../Utility/Title/Title"

const SponsorForm = () => {
  return (
    <section className={styles.SponsorForm}>
      <Title title="Become a Sponsor" />
      <form
        className={styles.Form}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/"
      >
        <div className={styles.InputGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Smith"
            onFocus={e => {
              e.target.placeholder = ""
            }}
            onBlur={e => {
              e.target.placeholder = "John Smith"
            }}
          />
        </div>

        <div className={styles.InputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="j.smith@example.com"
            onFocus={e => {
              e.target.placeholder = ""
            }}
            onBlur={e => {
              e.target.placeholder = "j.smith@example.com"
            }}
          />
        </div>

        <div className={styles.CheckboxInputGroup}>
          <p>Please Select Which Event(s) You Are Interested In:</p>

          <ul>
            <li>
              <label htmlFor="BKK">Bangkok</label>
              <input type="checkbox" id="BKK" name="BKK" />
            </li>

            <li>
              <label htmlFor="CM">Chiang Mai</label>
              <input type="checkbox" id="CM" name="CM" />
            </li>
          </ul>
        </div>

        <div className={styles.InputGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Please include your company name and website in the message (if
            applicable)."
            required
            onFocus={e => {
              e.target.placeholder = ""
            }}
            onBlur={e => {
              e.target.placeholder =
                "Please include your company name and website in the message (if applicable)."
            }}
          />
        </div>

        <button>Send</button>

        {/* BOT FIELDS */}
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
      </form>
    </section>
  )
}

export default SponsorForm
