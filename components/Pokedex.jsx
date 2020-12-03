import React from 'react'
import Pokemon from '../components/Pokemon'

const Pokedex = ({current, perPage, currentPage}) => {
    return (
        <section className="pokedex">
            {current.map((pokemon, index) => (
                <Pokemon
                key={index}
                id={(index + 1) + (perPage * currentPage)}>
                    {pokemon.name}
                </Pokemon>
            ))}
        </section>
    )
}

export default Pokedex
