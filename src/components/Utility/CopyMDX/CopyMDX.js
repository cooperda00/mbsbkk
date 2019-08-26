//Modules
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
//Sass
import styles from "./CopyMDX.module.scss"

const CopyMDX = ({ mdx }) => {
  return (
    <div className={styles.Copy}>
      <div className={styles.HTML}>
        <MDXRenderer>{mdx}</MDXRenderer>
      </div>
    </div>
  )
}

export default CopyMDX
