import React, { useState, useEffect } from 'react'
import Pagination from '../components/Pagination'
import Pokedex from '../components/Pokedex'
import Scroll from '../components/Scroll'
import Aside from '../components/Aside'
import { useAppState } from '../components/AppProvider'

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
  useEffect(() => {
    dispatch({
      type: 'set-all-pokemons',
      payload: pokedex
    })
  }, [])

  const [state, dispatch] = useAppState()
  const { currentPage } = state

  const [perPage] = useState(18)
  const upperLimit = perPage * (currentPage + 1)
  const lowerLimit = upperLimit - perPage
  const current = pokedex.slice(lowerLimit, upperLimit)
  const pageCount = Math.ceil(pokedex.length / perPage)

  function paginate(page) {
    dispatch({
      type: 'set-page',
      payload: page.selected
    })
  }

  return (
    <>
      <Scroll>
        <Pokedex
          current={current}
          perPage={perPage}
          currentPage={currentPage}
        />
        <Aside />
      </Scroll>
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  )
}

export default Home
