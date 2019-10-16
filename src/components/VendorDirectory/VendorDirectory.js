//Modules
import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
//Sass
import styles from "./VendorDirectory.module.scss"
//Components
import VendorGrid from "./VendorGrid/VendorGrid"
//Constants
import { filterButtons } from "../../constants/filterButtons"

const VendorDirectory = () => {
  //Bring in all vendors from contentful with graphql
  const data = useStaticQuery(query)

  //Set array of vendors to state on mount - adjustable via filter
  const [filteredVendors, setFilteredVendors] = useState([])
  useEffect(() => {
    setFilteredVendors(data.vendors.edges)
  }, [])

  //Apply Search Filter Method
  const handleFilterChange = e => {
    const filter = e.target.value.toLowerCase()
    const arrayClone = [...data.vendors.edges]
    const filteredArray = arrayClone.filter(({ node }) =>
      node.name.toLowerCase().includes(filter)
    )
    setFilteredVendors(filteredArray)
  }

  //Alphabetical Filter Methods
  const handleAlphabetFilter = e => {
    const filter = e.target.value.toLowerCase()
    const arrayClone = [...data.vendors.edges]

    //Reset Filter Back to Props
    if (filter === "clear") {
      setFilteredVendors(arrayClone)
      //Set for if first space is a digit
    } else if (filter === "0-9") {
      const filteredArray = arrayClone.filter(({ node }) => {
        if (/\d/.test(node.name[0])) {
          return true
        } else {
          return false
        }
      })
      setFilteredVendors(filteredArray)
      //Set based on first letter
    } else {
      const filteredArray = arrayClone.filter(({ node }) => {
        if (node.name[0].toLowerCase() === filter) {
          return true
        } else {
          return false
        }
      })
      setFilteredVendors(filteredArray)
    }
  }

  return (
    <div className={styles.VendorDirectory}>
      <h3>Exhibitor Directory</h3>
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
          <button onClick={handleAlphabetFilter} value="clear">
            All
          </button>
          {filterButtons.map(button => (
            <button onClick={handleAlphabetFilter} value={button}>
              {button.toUpperCase()}
            </button>
          ))}
          <button onClick={handleAlphabetFilter} value="0-9">
            0-9
          </button>
        </div>
      </div>
      <VendorGrid vendors={filteredVendors} />
    </div>
  )
}

const query = graphql`
  {
    vendors: allContentfulVendor(sort: { order: ASC, fields: name }) {
      edges {
        node {
          slug
          id
          name
          event
          blurb {
            blurb
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          website
          facebook
          twitter
          instagram
        }
      }
    }
  }
`

export default VendorDirectory
