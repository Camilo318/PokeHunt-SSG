import React from 'react'
import Pokemon from '../components/Pokemon'
import style from './styles/Pokedex.module.scss'
const Pokedex = ({ current, perPage, currentPage }) => {
  return (
    <section className={style.pokedex}>
      {current.map((pokemon, index) => (
        <Pokemon key={index} id={index + 1 + perPage * currentPage}>
          {pokemon.name}
        </Pokemon>
      ))}
    </section>
  )
}

export default Pokedex
