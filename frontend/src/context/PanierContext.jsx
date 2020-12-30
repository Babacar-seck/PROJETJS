import React, { createContext } from 'react'

const PanierContext =  createContext({
        panier : [],
        setPanier : () => {}
})

export default PanierContext
