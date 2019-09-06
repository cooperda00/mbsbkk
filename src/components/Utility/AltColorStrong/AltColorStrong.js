//Modules
import React from 'react'
//Sass
import styles from "./AltColorStrong.module.scss"

const AltColorStrong = ({children}) => {
    return (
        <strong className={styles.AltColorStrong}> 
            {children}
        </strong>
    )
}

export default AltColorStrong
