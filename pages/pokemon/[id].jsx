import React from 'react'
import Image from 'next/image'
import Aside from '../../components/Aside'
import style from '../../components/styles/PokemonDetail.module.scss'
const api = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5'

export async function getStaticPaths() {
    const res = await fetch(api)
    const data = await res.json()
    const { results } = data
    const pokemons = await Promise.all(results.map(async item => {
        const res = await fetch(item.url)
        const data = await res.json()
        return data
    }))
    const paths = pokemons.map(pokemon => (
        { params: { id: pokemon.id.toString() } } 
    ))

    return { paths, fallback: true}
}

export async function getStaticProps({ params }) {
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.id}/`
    )
    const pokemon = await res.json()
    return {
        props: {
            pokemon
        }
    }
}

const PokemonDetail = ({ pokemon }) => {
    const id = pokemon?.id.toString()
    const name = pokemon?.name
    const nameP = name[0].toUpperCase() + name.slice(1)
    const source = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    return (
        <div className={style.pokemon__container}>
            <div className={style.pokemon__detail}>
                <div className={style.pokemon__image}>
                    <Image
                    src={source}
                    width={500}
                    height={500}
                    alt={`Picture of ${pokemon?.name}`}
                    />
                </div>
                <div className={style.pokemon__info}>
                    <h3>{nameP} {id.padStart(3,0)}</h3>
                </div>
            </div>
            <Aside />
        </div>
    )
}

export default PokemonDetail
