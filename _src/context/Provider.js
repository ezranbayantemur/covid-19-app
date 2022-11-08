import React, { useReducer } from 'react'
import Context, { initalState } from './components/store'

import { reducers } from './components/reducers'

const Provider = ({ children }) => {
    const
        [state, dispatch] = useReducer(reducers, initalState),
        value = { state, dispatch }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Provider