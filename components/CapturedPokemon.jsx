import React from 'react'
import style from './styles/CapturedPokemon.module.scss'

const CapturedPokemon = ({ pokemon }) => {
    const { sprites: { front_shiny }} = pokemon
    return (
        <div className={style.vault__pokemon}>
            <img src={front_shiny} alt={pokemon.name}/>
        </div>
    )
}

export default CapturedPokemon
