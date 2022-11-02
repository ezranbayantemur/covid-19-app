import React from 'react'

import Router from './navigation/Router'
import Provider from './context/Provider'

export default function Wrapper() {
    return (
        <Provider>
            <Router />
        </Provider>
    )
}