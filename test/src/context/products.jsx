import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const productContext = createContext(null)

const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([])

  return (
    <productContext.Provider value={{products,setProducts}}>{children}</productContext.Provider>
  )
}

export default ProductsProvider