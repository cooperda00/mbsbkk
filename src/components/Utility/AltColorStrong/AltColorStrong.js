//Modules
import React from 'react'
//Sass
import styles from "./AltColorStrong.module.scss"

const AltColorStrong = ({children, color}) => {
    const st = color === "primary" ? `${styles.AltColorStrong} ${styles.Primary}` : `${styles.AltColorStrong} ${styles.Secondary}`
    return (
        <strong className={st}> 
            {children}
        </strong>
    )
}

export default AltColorStrong
