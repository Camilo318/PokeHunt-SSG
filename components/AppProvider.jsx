import React, {createContext, useContext, useReducer } from 'react'

//Context object
const AppContext = createContext() // Share data through component tree

//Custom hook to subscribe to context changes
export const useAppState = () => useContext(AppContext)


const appStateReducer = (state, action) => {
    switch (action.type) {
        case 'set-page':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'set-all-pokemons':
            return {
                ...state,
                allPokemons: action.payload
            }
        case 'add-pokemon':
            return {
                ...state,
                myPokemons: [...state.myPokemons, action.payload]
            }
        case 'delete-pokemon':
            return {
                ...state,
                myPokemons: state.myPokemons.filter(pokemon => (
                    pokemon.id != action.payload
                ))
            }
        default:
            return state
    }
}
const initialState = {
    currentPage: 0,
    myPokemons: [],
    allPokemons: []
}

export const AppProvider = ({ children }) => {
    //Value to be passed to consuming components
    let contextValue = useReducer(appStateReducer, initialState)

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

