//Modules
import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
//Sass
import styles from "./HZDirectory.module.scss"
//Components
import HZGrid from "./HZGrid/HZGrid"
//Constants
import { filterButtons } from "../../constants/filterButtons"

const HZDirectory = ({ healingZone }) => {
  //Set array of HZ Practitioners to state on mount - adjustable via filter
  const [filteredHZ, setFilteredHZ] = useState([])
  useEffect(() => {
    setFilteredHZ(healingZone)
  }, [])

  //Apply Search Filter Method
  const handleFilterChange = e => {
    const filter = e.target.value.toLowerCase()
    const arrayClone = [...healingZone]
    const filteredArray = arrayClone.filter(({ node }) =>
      node.name.toLowerCase().includes(filter)
    )
    setFilteredHZ(filteredArray)
  }

  //Alphabetical Filter Methods
  const handleAlphabetFilter = e => {
    //Set selectedButton
    setSelectedButton(e.target.value)

    const filter = e.target.value.toLowerCase()
    const arrayClone = [...healingZone]

    //Reset Filter Back to Props
    if (filter === "all") {
      setFilteredHZ(arrayClone)
      //Set for if first space is a digit
    } else if (filter === "0-9") {
      const filteredArray = arrayClone.filter(({ node }) => {
        if (/\d/.test(node.name[0])) {
          return true
        } else {
          return false
        }
      })
      setFilteredHZ(filteredArray)
      //Set based on first letter
    } else {
      const filteredArray = arrayClone.filter(({ node }) => {
        if (node.name[0].toLowerCase() === filter) {
          return true
        } else {
          return false
        }
      })
      setFilteredHZ(filteredArray)
    }
  }

  //Conditional Styles ************************************
  const [selectedButton, setSelectedButton] = useState("all")

  return (
    <>
      <hr />
      <div className={styles.HZDirectory}>
        <h2>Directory</h2>
        <div className={styles.FilterControls}>
          <div className={styles.InputGroup}>
            <label htmlFor="filter">Search</label>
            <input
              type="text"
              name="filter"
              id="filter"
              onChange={handleFilterChange}
            />
          </div>
          <div className={styles.Alphabet}>
            <button
              onClick={handleAlphabetFilter}
              value="all"
              className={selectedButton === "all" && styles.Selected}
            >
              All
            </button>
            {filterButtons.map(button => (
              <button
                onClick={handleAlphabetFilter}
                value={button}
                className={selectedButton === button && styles.Selected}
              >
                {button.toUpperCase()}
              </button>
            ))}
            <button
              onClick={handleAlphabetFilter}
              value="0-9"
              className={selectedButton === "0-9" && styles.Selected}
            >
              0-9
            </button>
          </div>
        </div>
        <HZGrid HZ={filteredHZ} />
      </div>
    </>
  )
}

export default HZDirectory
