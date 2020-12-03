import React, { useState } from 'react'
import Pagination from '../components/Pagination'
import Pokedex from '../components/Pokedex'
import Scroll from '../components/Scroll'
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
            <Scroll >
                <Pokedex
                current={current}
                perPage={perPage}
                currentPage={currentPage}/>
            </Scroll>
            <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            paginate={paginate}/>
        </>
    )
}

export default Home
