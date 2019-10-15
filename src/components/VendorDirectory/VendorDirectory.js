//Modules
import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
//Sass
import styles from "./VendorDirectory.module.scss"
//Components
import VendorGrid from "./VendorGrid/VendorGrid"

//Use filter controls to manipulate state

const VendorDirectory = () => {
  //Bring in all vendors from contentful with graphql
  const data = useStaticQuery(query)

  //Set array of vendors to state on mount
  const [vendors, setVendors] = useState([])
  useEffect(() => {
    setVendors(data.vendors.edges)
  }, [])

  return (
    <div className={styles.VendorDirectory}>
      <h3>Exhibitor Directory</h3>
      <div>Filter Controls Go Here</div>
      <VendorGrid vendors={vendors} />
    </div>
  )
}

const query = graphql`
  {
    vendors: allContentfulVendor(sort: { order: ASC, fields: name }) {
      edges {
        node {
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
