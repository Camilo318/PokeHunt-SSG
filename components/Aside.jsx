import React from 'react'
import style from './styles/Aside.module.scss'
import { useAppState } from '../components/AppProvider'
import CapturedPokemon from '../components/CapturedPokemon'
const Aside = () => {

    const [state, dispatch] = useAppState()
    const pokemons = state?.myPokemons
    return (
        <div className={style.aside}>
            <div className={style.aside__container}>
                <div className={style.search}>
                    <input type="text" placeholder='Search Pokemon'/>
                </div>
                <h3>My Pokemons</h3>

                <div className={style.vault}>
                    { pokemons.map(pokemon => (
                        <CapturedPokemon pokemon={pokemon}/>
                    )) }
                </div>

            </div>
        </div>
    )
}

export default Aside
