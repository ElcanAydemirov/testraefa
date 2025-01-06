import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/client/contact/contact'
import About from './pages/client/about'

import { AdminHome } from './pages/admin'
import { AdminProducts } from './pages/admin/products'
import { AddProduct } from './pages/admin/addproduct'
import ClientLayout from './pages/client'
import ClientProducts from './pages/client/products'
import ProductDetails from './pages/client/productdetails'
import WishList from './pages/client/wishlist'
import { wishlistContext } from './context/wishlist'

function App() {
  const [count, setCount] = useState(0)
  const {wishlist,setWishlist} = useContext(wishlistContext)
  
  return (
    <>

    <Routes>
      <Route path='/' element={<ClientLayout/>}>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<ClientProducts/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
      </Route>
      <Route path='/admin' element={<AdminHome/>}>
        <Route path='/admin/products' element={<AdminProducts/>}/>
        <Route path='/admin/addproducts' element={<AddProduct/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
