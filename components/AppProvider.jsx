import React, {createContext, useContext, useReducer } from 'react'

//Context object
const AppContext = createContext() // Share data through component tree

//Custom hook to suscribe to context changes
export const useAppState = () => useContext(AppContext)


const appStateReducer = (action, state) => {
    switch (action.type) {
        default:
            return state
    }
}
const initialState = {
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

