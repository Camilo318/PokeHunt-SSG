import React from 'react'
import style from './styles/Pokemon.module.scss'

const Pokemon = ({ id, children }) => {
    const image = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    return (
        <div className={style.pokemon}>
            <div className={style.pokemon__img}>
                <img src={image} alt="pokemon"/>
            </div>
            <h4>{ children }</h4>
        </div>
    )
}

export default Pokemon
