import React from 'react'
const api = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=841'

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
    return (
        <>
          <div className="pokemon-container">
              <div className="pokemon-detail">
                  <div className="pokemon-detail__image">
                      <h2>{pokemon?.name}</h2>
                      <h3>{pokemon?.id}</h3>
                  </div>
              </div>
          </div>
        </>
    )
}

export default PokemonDetail
