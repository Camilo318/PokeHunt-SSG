import React from 'react'
import style from './styles/Header.module.scss'
import Link from 'next/link'
const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <Link href='/'>
                    <a><h2>Poke Hunt</h2></a>
                </Link>
                <span>
                    •••
                </span>
            </div>
        </header>
    )
}

export default Header
