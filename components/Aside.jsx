import React from 'react'
import style from './styles/Aside.module.scss'
const Aside = () => {
    return (
        <div className={style.aside}>
            <div className={style.aside__container}>
                <div className={style.search}>
                    <input type="text" placeholder='Search Pokemon'/>
                </div>
                <h3>My Pokemons</h3>
                <div></div>

            </div>
        </div>
    )
}

export default Aside
