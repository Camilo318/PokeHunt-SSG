import React from 'react'
import style from './styles/Header.module.scss'
const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <h2>Poke Hunt</h2>
                <span>
                    •••
                </span>
            </div>
        </header>
    )
}

export default Header
