import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const wishlistContext = createContext(null)

const Wishlist = ({children}) => {

    const [wishlist, setWishlist] = useState([])

  return (
    <wishlistContext.Provider value={{wishlist,setWishlist}}>{children}</wishlistContext.Provider>
  )
}

export default Wishlist