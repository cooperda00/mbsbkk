//Modules
import React from "react"
//Sass
import styles from "./Contact.module.scss"
//Components
import Title from "../Utility/Title/Title"

const Contact = () => {
  return (
    <section className={styles.ContactContainer}>
      <Title title="Get in touch with us" />
      <div className={styles.Details}>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:nfo@mbsbkk.com">info@mbsbkk.com</a>
        </p>
        <p>
          <strong>Phone:</strong> 00000000000
        </p>
      </div>

      <form
        className={styles.ContactForm}
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

        <div className={styles.Left}>
          <div>
            <label htmlFor="firstName">* First Name</label>
            <input name="first-name" type="text" id="firstName" required />
          </div>

          <div>
            <label htmlFor="lastName">* Last Name</label>
            <input name="last-name" type="text" id="lastName" required />
          </div>

          <div>
            <label htmlFor="email">* Email</label>
            <input name="email" type="email" id="email" required />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input name="phone" type="number" id="phone" />
          </div>
        </div>

        <div className={styles.Right}>
          <div>
            <label htmlFor="message">* Message</label>
            <textarea id="message" name="message" />
          </div>

          <button className={styles.Submit}>Submit</button>
        </div>
      </form>
    </section>
  )
}

export default Contact
