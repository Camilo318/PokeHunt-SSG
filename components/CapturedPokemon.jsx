import React from 'react'
import style from './styles/CapturedPokemon.module.scss'
import Link from 'next/link'

const CapturedPokemon = ({ pokemon }) => {
  const {
    sprites: { front_default }
  } = pokemon
  const { id } = pokemon
  return (
    <Link href={`/pokemon/${id}`}>
      <a className={style.vault__pokemon}>
        <img src={front_default} alt={pokemon.name} />
      </a>
    </Link>
  )
}

export default CapturedPokemon
