import React from 'react'
import Image from 'next/image'
import Aside from '../../components/Aside'
import style from '../../components/styles/PokemonDetail.module.scss'
import { useAppState } from '../../components/AppProvider'


export async function getStaticPaths() {
    const api = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5'
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
    const height = pokemon?.height
    const weight = pokemon?.weight
    const exp = pokemon?.base_experience
    
    const [state, dispatch] = useAppState()
    const { myPokemons } = state
    const duplicate = myPokemons.find(pokemon => (
        pokemon.name === name
    ))

    function addPokemon() {
        console.log('Add')
        dispatch({
            type: 'add-pokemon',
            payload: pokemon
        })
    }

    function deletePokemon() {
        console.log('Delete')
        dispatch({
            type: 'delete-pokemon',
            payload: id
        })
    }

    const source = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    return (
        <div className={style.pokemon__container}>
            <div className={style.pokemon__detail}>
                <div className={style.pokemon__image}>
                    <Image
                    src={source}
                    width={425}
                    height={425}
                    alt={`Picture of ${pokemon?.name}`}
                    />
                </div>
                <div className={style.pokemon__info}>
                    <h3>{nameP} {id.padStart(3,0)}</h3>
                    <p>Height: {height/10}m</p>
                    <p>Weight: {weight/10}kg</p>
                    <p>Base Experience: {exp}</p>
                    { duplicate
                    ?
                    <button className={style.delete}
                    onClick={deletePokemon}>
                        Delete Pokemon
                    </button>
                    :
                    <button className={style.add}
                    onClick={addPokemon}>
                        Add Pokemon
                    </button> }
                </div>
            </div>
            <Aside />
        </div>
    )
}

export default PokemonDetail
