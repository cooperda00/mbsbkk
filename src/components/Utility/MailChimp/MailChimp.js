//Modules
import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
//Sass
import styles from "./MailChimp.module.scss"

const MailChimp = () => {
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

    console.log(result)

    setSubResult(result)

    setEmail("")
    setName("")
  }

  return (
    <div className={styles.MailChimp}>
      <p>Subscribe To Our Newsletter:</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name</label>
          <input
            name="Name"
            id="Name"
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value)
            }}
            placeholder="John Smith"
            onFocus={e => (e.target.placeholder = "")}
            onBlur={e => (e.target.placeholder = "John Smith")}
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
            placeholder="j.smith@example.com"
            onFocus={e => (e.target.placeholder = "")}
            onBlur={e => (e.target.placeholder = "j.smith@example.com")}
          />
        </div>

        <p className={styles.Message}>{subResult.msg}</p>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default MailChimp
