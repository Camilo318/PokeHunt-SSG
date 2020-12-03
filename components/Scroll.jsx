import React from 'react'
import styles from './styles/Scroll.module.scss'

const Scroll = ({ children }) => {
    return (
        <div className={styles.scroll}>
            {children}
        </div>
    )
}

export default Scroll
