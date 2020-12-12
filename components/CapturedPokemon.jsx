import React from 'react'

const CapturedPokemon = ({ pokemon }) => {
    const { sprites: { front_shiny }} = pokemon
    return (
        <div>
            <img src={front_shiny} alt={pokemon.name}/>
        </div>
    )
}

export default CapturedPokemon
