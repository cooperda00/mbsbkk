//Modules
import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
//Sass
import styles from "./MailChimp.module.scss"

const MailChimp = ({ text }) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [subResult, setSubResult] = useState({
    result: "",
    msg: "",
  })

  const handleSubmit = async e => {
    e.preventDefault()

    const result = await addToMailchimp(email, {
      FNAME: name,
    })

    setSubResult(result)

    setEmail("")
    setName("")
  }

  return (
    <div className={styles.MailChimp}>
      <p className={styles.Title}>{text}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">First Name</label>
          <input
            name="Name"
            id="Name"
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value)
            }}
            placeholder="Jane"
            onFocus={e => (e.target.placeholder = "")}
            onBlur={e => (e.target.placeholder = "Jane")}
          />
        </div>

        <div>
          <label htmlFor="Email">Email</label>
          <input
            name="Email"
            id="Email"
            type="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value)
            }}
            placeholder="j.sm@test.com"
            onFocus={e => (e.target.placeholder = "")}
            onBlur={e => (e.target.placeholder = "j.smith@example.com")}
          />
        </div>

        <p className={styles.Message}>{subResult.msg}</p>

        <button>Subscribe</button>
      </form>
    </div>
  )
}

export default MailChimp
