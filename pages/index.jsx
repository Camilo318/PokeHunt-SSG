import React, { useState } from 'react'
import Pagination from '../components/Pagination'
import Pokemon from '../components/Pokemon'

const api = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=841'

export async function getStaticProps() {
    const res = await fetch(api)
    const data = await res.json()
    return {
        props: {
            pokedex: data.results
        }
    }
}

const Home = ({ pokedex }) => {

    const [perPage] = useState(18)
    const [currentPage, setCurrentPage] = useState(0)
    const upperLimit = perPage * (currentPage + 1)
    const lowerLimit = upperLimit - perPage
    const current = pokedex.slice(lowerLimit, upperLimit)
    const pageCount = Math.ceil(pokedex.length / perPage)

    function paginate(page) {
        setCurrentPage(page.selected)
    }

    return (
        <>
            <section className="pokedex">
                {current.map((pokemon, index) => (
                    <Pokemon
                    key={index}
                    id={(index + 1) + (perPage * currentPage)}>
                        {pokemon.name}
                    </Pokemon>
                ))}
            </section>

            <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            paginate={paginate}/>
        </>
    )
}

export default Home
